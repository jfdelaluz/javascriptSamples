BaseModule.Printer = (function () {
  var self = {},
      containerDiv = document.getElementById('container');
  
  self.printSectionTitle = function(title) {
    var sectionTitle = document.createElement('h3');
    var content = document.createTextNode(title);
    sectionTitle.appendChild(content);
    document.body.insertBefore(sectionTitle, containerDiv);
  };
  
  self.printLine = function(string) {
    var line = document.createElement('p');
    var content = document.createTextNode(string);
    line.appendChild(content);
    document.body.insertBefore(line, containerDiv);
  };
  
  self.printList = function(object) {
    var ulist = document.createElement('ul');
    var key;
    for (key in object) {
      var listItem = document.createElement('li');
      var content = document.createTextNode(
        key + ': ' + object[key]
      );
      
      listItem.appendChild(content);
      ulist.appendChild(listItem);
    };
    
    document.body.insertBefore(ulist, containerDiv);
  };
  
  self.sectionSeparator = function() {
    var separator = document.createElement('hr');
    document.body.insertBefore(separator, containerDiv);
  };
  
  return self;
})();

