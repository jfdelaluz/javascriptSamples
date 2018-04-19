BaseModule.Printer = (function () {
  var self = {},
      containerDiv = document.getElementById('container');
  
  self.printSectionTitle = function(title, attributes) {
    var sectionTitle = document.createElement('h3');
    var content = document.createTextNode(title);
    setAttributesToElement(sectionTitle, attributes);
    sectionTitle.appendChild(content);
    containerDiv.appendChild(sectionTitle);
  };
  
  self.printLine = function(string, attributes) {
    var line = document.createElement('p');
    var content = document.createTextNode(string);
    setAttributesToElement(line, attributes);
    line.appendChild(content);
    containerDiv.appendChild(line);
  };
  
  self.printList = function(object/*, parentAttributes, childAttributes*/) {
    var ulist = document.createElement('ul');
    var key;
    //setAttributesToElement(ulist, parentAttributes); // needs to be tested
    for (key in object) {
      var listItem = document.createElement('li');
      var content = document.createTextNode(
        key + ': ' + object[key]
      );
      //setAttributesToElement(listItem, childAttributes); // needs to be tested
      listItem.appendChild(content);
      ulist.appendChild(listItem);
    };
    
    containerDiv.appendChild(ulist);
  };
  
  self.sectionSeparator = function() {
    var separator = document.createElement('hr');
    containerDiv.appendChild(separator);
  };
  
  function setAttributesToElement(element, attributes) {
    if (typeof attributes === 'object') {
      for (attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
      }
    }
    
    return element;
  }
  
  return self;
})();

