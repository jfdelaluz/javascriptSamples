ArraySamples.Length = (function () {
  var self = {};

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Length', fileAndLineIdentifier);
    lengthExamples();
    setLengthExplicitly();
    BaseModule.Printer.sectionSeparator();
  };

  function lengthExamples() {
    BaseModule.Printer.printLine('Create "myArray" empty array: var myArray = [];');
    var myArray = [];
    BaseModule.Printer.printLine('"myArray" length: myArray.length = ' + myArray.length);
    BaseModule.Printer.printLine('Add index 100 to "myArray": myArray[100] = true');
    myArray[100] = true;
    BaseModule.Printer.printLine('"myArray" new length: myArray.length = ' + myArray.length);
    BaseModule.Printer.printLine('"myArray" contents: ' + myArray);
  }

  function setLengthExplicitly() {
    BaseModule.Printer.printLine('Create "numbers" array with 10 elements:');
    BaseModule.Printer.printLine(
      'var numbers = [\'zero\', \'one\', \'two\', \'three\', \'four\',' +
      ' \'five\', \'six\', \'seven\', \'eight\', \'nine\']'
    );
    var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    BaseModule.Printer.printLine('"numbers" array content: ' + numbers);
    BaseModule.Printer.printLine('"numbers" length: numbers.length = ' + numbers.length);

    BaseModule.Printer.printLine('Change "numbers" array length: numners.length = 3;');
    numbers.length = 3;
    BaseModule.Printer.printLine('"numbers" array new content: ' + numbers);

    BaseModule.Printer.printLine('Add new element to the end of "numbers": numbers[numbers.length] = \'shi\';');
    numbers[numbers.length] = 'shi';
    BaseModule.Printer.printLine('"numbers" array new content: ' + numbers);

    BaseModule.Printer.printLine('Add element to "numbers" using push: numbers.push(\'go\');');
    numbers.push('go');
    BaseModule.Printer.printLine('"numbers" array new content: ' + numbers);
  }

  return self;
})();
