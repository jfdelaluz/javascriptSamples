var ReferenceSample = (function() {
  var self = {};
  
  self.init = function() {
    variablesWithSeparateObjectDefinitions();
    variablesToSameObjectDefinition();
  };
  
  function variablesWithSeparateObjectDefinitions() {
    var fileAndLineIdentifier = new Error();
    var a = {}, b = {}, c = {};
    a.value = 'blablabla';
    BaseModule.Printer.printSectionTitle('Variables With Separate Object Definitions', fileAndLineIdentifier);
    BaseModule.Printer.printLine('a value: ' + a.value);
    BaseModule.Printer.printLine('b value: ' + b.value);
    BaseModule.Printer.printLine('c value: ' + c.value);
    BaseModule.Printer.sectionSeparator();
  }
  
  function variablesToSameObjectDefinition() {
    var fileAndLineIdentifier = new Error();
    var x = y = z = {};
    x.value = 'blebleble';
    BaseModule.Printer.printSectionTitle('Variables To Same Object Definition', fileAndLineIdentifier);
    BaseModule.Printer.printLine('x value: ' + x.value);
    BaseModule.Printer.printLine('y value: ' + y.value);
    BaseModule.Printer.printLine('z value: ' + z.value);
    BaseModule.Printer.sectionSeparator();
  }
  
  return self;
})();

