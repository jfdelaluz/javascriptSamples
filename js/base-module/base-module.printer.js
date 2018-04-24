BaseModule.Printer = (function () {
  var self = {},
      containerDiv = document.getElementById('container');
  
  self.printSectionTitle = function(title, fileAndLineIdentifier, attributes) {
    var sectionTitle = document.createElement('h3');
    var content = document.createTextNode(title);
    setAttributesToElement(sectionTitle, attributes);
    sectionTitle.appendChild(content);
    containerDiv.appendChild(sectionTitle);
    addFilenameReport(fileAndLineIdentifier);
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
  
  /**
   * @param  {object} element
   * @param  {object} attributes
   * @return {object}
   */
  function setAttributesToElement(element, attributes) {
    if (typeof attributes === 'object') {
      for (attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
      }
    }
    
    return element;
  }
  
  /**
   * @param {object} fileAndLineIdentifier
   */
  function addFilenameReport(fileAndLineIdentifier) {
    var filenameReport = document.createElement('h5');
    var content = document.createTextNode(
      'Filename: ' + fileAndLineIdentifier.fileName + ', Line Number: ' + getFunctionLine(fileAndLineIdentifier)
    );
    filenameReport.appendChild(content);
    containerDiv.appendChild(filenameReport);
  }
  
  /**
   * @param  {object} fileAndLineIdentifier
   * @return {number}
   */
  function getFunctionLine(fileAndLineIdentifier) {
    // fileAndLineIdentifier should be created in the first line after the function starts
    return fileAndLineIdentifier.lineNumber -1;
  }
  
  return self;
})();
