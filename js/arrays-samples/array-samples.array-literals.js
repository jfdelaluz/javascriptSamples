ArraySamples.ArrayLiterals = (function () {
  var self = {};

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('ArrayLiterals', fileAndLineIdentifier);
    createArraySamples();
    BaseModule.Printer.sectionSeparator();
  };

  function createArraySamples() {
    BaseModule.Printer.printLine('Create "empty" and "numbers" arrays');
    var empty = [];
    var numbers = [
      'zero', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine'
    ];

    BaseModule.Printer.printLine('Array "empty" content: ' + empty);
    BaseModule.Printer.printLine('Array "numbers" content: ' + numbers);
    BaseModule.Printer.printLine('Retrieving an element from "empty" array: empty[1] = ' + empty[1]);
    BaseModule.Printer.printLine('Retrieving an element from "numbers" array: numbers[1] = ' + numbers[1]);
    BaseModule.Printer.printLine('Number of elements in "empty" array: empty.length = ' + empty.length);
    BaseModule.Printer.printLine('Number of elements in "numbers" array: numbers.length = ' + numbers.length);

    BaseModule.Printer.printLine('Create "numbers_object" object');
    var numbers_object = {
      '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
      '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
    };
    BaseModule.Printer.printLine('"numbers_object" content: ' + numbers_object);
    BaseModule.Printer.printLine(
      'Object "numbers_object" does not have "length" property: numbers_object.length = ' + numbers_object.length
    );
  }

  return self;
})();
