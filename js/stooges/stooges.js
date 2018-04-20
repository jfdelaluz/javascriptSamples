var Stooges = (function() {
  var self = {},
      originalStooge = {};
  
  self.init = function() {
    initStooge();
    printOriginalStooge();
    addPropertyToStoogeByReference();
    createNewStoogeFromPrototype();
    newPropertiesOnOriginalStoogePresentInNewStooge();
    newValuesSetToSecondObjectDoNotAffectPrototype();
    loopObjectProperties();
    loopObjectPropertiesWithCustomOrder();
    deletePropertySample();
  };
  
  function initStooge() {
    originalStooge['first-name'] = 'Jerome';
    originalStooge['last-name'] = 'Howard';
  }
  
  function printOriginalStooge() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Original Stooge', fileAndLineIdentifier);
    BaseModule.Printer.printLine('First Name: ' + originalStooge['first-name']);
    BaseModule.Printer.printLine('Last Name: ' + originalStooge['last-name']);
    BaseModule.Printer.sectionSeparator();
  }
  
  function addPropertyToStoogeByReference() {
    var fileAndLineIdentifier = new Error();
    var x = originalStooge;
    
    BaseModule.Printer.printSectionTitle('Add Property To Stooge By Reference', fileAndLineIdentifier);
    x.nickname = 'Curly';
    BaseModule.Printer.printLine('Variable x new nickname property: ' + x.nickname);
    BaseModule.Printer.printLine('Original stooge new nickname property: ' + originalStooge.nickname);
    BaseModule.Printer.sectionSeparator();
  }
  
  function createNewStoogeFromPrototype() {
    var fileAndLineIdentifier = new Error();
    var anotherStooge = Object.create(originalStooge);
    
    BaseModule.Printer.printSectionTitle('Create New Stooge From Original Stooge Prototype', fileAndLineIdentifier);
    BaseModule.Printer.printLine('New stooge first name: ' + anotherStooge['first-name']);
    anotherStooge['first-name'] = 'Heffer';
    BaseModule.Printer.printLine('Old stooge first name: ' + originalStooge['first-name']);
    BaseModule.Printer.printLine('New stooge new first name: ' + anotherStooge['first-name']);
    BaseModule.Printer.sectionSeparator();
  }
  
  function newPropertiesOnOriginalStoogePresentInNewStooge() {
    var fileAndLineIdentifier = new Error();
    var anotherStooge = Object.create(originalStooge);
    
    BaseModule.Printer.printSectionTitle(
      'New Properties On Original Stooge Present In New Stooge',
      fileAndLineIdentifier
    );
    originalStooge.profession = 'actor';
    BaseModule.Printer.printLine('Old stooge profession: ' + originalStooge.profession);
    BaseModule.Printer.printLine('New stooge profession: ' + anotherStooge.profession);
    BaseModule.Printer.sectionSeparator();
  }
  
  function newValuesSetToSecondObjectDoNotAffectPrototype() {
    var fileAndLineIdentifier = new Error();
    var another_stooge = Object.create(originalStooge);
    another_stooge['first-name'] = 'Harry';
    another_stooge['middle-name'] = 'Moses';
    another_stooge.nickname = 'Moe';
    
    BaseModule.Printer.printSectionTitle(
      'New Values Set To Second Object Do Not Affect Prototype',
      fileAndLineIdentifier
    );
    BaseModule.Printer.printLine('Original Stooge:');
    BaseModule.Printer.printList(originalStooge);
    BaseModule.Printer.printLine('Original Stooge Middle Name Is Not Defined: ' + originalStooge['middle-name']);
    BaseModule.Printer.printLine('New Stooge:');
    BaseModule.Printer.printList(another_stooge);
    BaseModule.Printer.sectionSeparator();
  }
  
  function loopObjectProperties() {
    var fileAndLineIdentifier = new Error();
    var name;
    var another_stooge = Object.create(originalStooge);
    another_stooge['first-name'] = 'Harry';
    another_stooge['middle-name'] = 'Moses';
    another_stooge.nickname = 'Moe';
    BaseModule.Printer.printSectionTitle('Loop Object Properties', fileAndLineIdentifier);
    for (name in another_stooge) {
      if (typeof another_stooge[name] !== 'function') {
        BaseModule.Printer.printLine(name + ': ' + another_stooge[name]);
      }
    }
    BaseModule.Printer.sectionSeparator();
  }
  
  function loopObjectPropertiesWithCustomOrder() {
    var fileAndLineIdentifier = new Error();
    var i;
    var properties = [
      'first-name',
      'middle-name',
      'last-name',
      'nickname',
      'profession'
    ];
    
    var another_stooge = Object.create(originalStooge);
    another_stooge['first-name'] = 'Harry';
    another_stooge['middle-name'] = 'Moses';
    another_stooge.nickname = 'Moe';
    
    BaseModule.Printer.printSectionTitle('Loop Object Properties With Custom Order', fileAndLineIdentifier);
    for (i = 0; i < properties.length; i++) {
      BaseModule.Printer.printLine(properties[i] + ': ' + another_stooge[properties[i]]);
    }
    BaseModule.Printer.sectionSeparator();
  }
  
  function deletePropertySample() {
    var fileAndLineIdentifier = new Error();
    var another_stooge = Object.create(originalStooge);
    another_stooge['first-name'] = 'Harry';
    another_stooge['middle-name'] = 'Moses';
    another_stooge.nickname = 'Moe';
    
    BaseModule.Printer.printSectionTitle('Delete Property Sample', fileAndLineIdentifier);
    BaseModule.Printer.printLine('New Stooge Middle Name: ' + another_stooge['middle-name']);
    BaseModule.Printer.printLine('New Stooge Nickname: ' + another_stooge.nickname);
    delete another_stooge['middle-name'];
    delete another_stooge.nickname;
    BaseModule.Printer.printLine('New Stooge Middle Name Removed: ' + another_stooge['middle-name']);
    BaseModule.Printer.printLine(
      'New Stooge Nickname Removed, Original Stooge Nickname Displayed (Property From Prototype): '
      + another_stooge.nickname
    );
    BaseModule.Printer.sectionSeparator();
  }
  
  return self;
})();

