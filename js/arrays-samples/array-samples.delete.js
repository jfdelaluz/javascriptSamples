ArraySamples.Delete = (function () {
  var self = {};

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Delete', fileAndLineIdentifier);
    deleteFromArraySample();
    spliceArraySample();
    BaseModule.Printer.sectionSeparator();
  };

  function deleteFromArraySample() {
    BaseModule.Printer.printLine(
      'Test array "numbers": var numbers = [\'zero\', \'one\', \'two\', \'three\', \'four\']'
    );
    var numbers = ['zero', 'one', 'two', 'three', 'four'];
    BaseModule.Printer.printLine('"numbers" content: ' + numbers);

    BaseModule.Printer.printLine('Delete element from "numbers": delete numbers[2]');
    delete numbers[2];
    BaseModule.Printer.printLine('"numbers" new content: ' + numbers);
    BaseModule.Printer.printLine('Trying to get deleted element: numbers[2] = ' + numbers[2]);
  }

  function spliceArraySample() {
    BaseModule.Printer.printLine(
      'Test array "numbers": var numbers = [\'zero\', \'one\', \'two\', \'three\', \'four\']'
    );
    var numbers = ['zero', 'one', 'two', 'three', 'four'];
    BaseModule.Printer.printLine('"numbers" content: ' + numbers);

    BaseModule.Printer.printLine('Use splice to remove an element: numbers.splice(2, 1);');
    numbers.splice(2, 1);
    BaseModule.Printer.printLine('"numbers" new content: ' + numbers);
    BaseModule.Printer.printLine('Trying to get deleted element: numbers[2] = ' + numbers[2]);
  }

  return self;
})();
