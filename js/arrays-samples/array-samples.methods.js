ArraySamples.Methods = (function () {
  var self = {};

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Methods', fileAndLineIdentifier);
    augmentArrayMethodReduce();
    useAugmentedFunctionToAdd();
    useAugmentedFunctionToMultiply();
    addMethodDirectlyToIndividualArray();
    BaseModule.Printer.sectionSeparator();
  }

  function augmentArrayMethodReduce() {
    BaseModule.Printer.printLine('Augment "Array" object with "reduce" method');
    Array.method('reduce', function (f, value) {
      var i;
      for (i = 0; i < this.length; i++) {
        value = f(this[i], value);
      }
      return value;
    });
  }

  function useAugmentedFunctionToAdd() {
    BaseModule.Printer.printLine('Create array to be processed: var numbers = [2, 3];');
    var numbers = [2, 3];

    BaseModule.Printer.printLine('Define "add" function');
    var add = function (a, b) {
      return a + b;
    };

    BaseModule.Printer.printLine(
      'Invoke "numbers" method "reduce" with the "add" function: numbers.reduce(add, 0) = ' + numbers.reduce(add, 0)
    );
  }

  function useAugmentedFunctionToMultiply() {
    BaseModule.Printer.printLine('Create array to be processed: var numbers = [2, 3];');
    var numbers = [2, 3];

    BaseModule.Printer.printLine('Define "multiply" function');
    var multiply = function (a, b) {
      return a * b;
    };

    BaseModule.Printer.printLine(
      'Invoke "numbers" method "reduce" with the "multiply" function: numbers.reduce(multiply, 1) = ' +
      numbers.reduce(multiply, 1)
    );
  }

  function addMethodDirectlyToIndividualArray() {
    BaseModule.Printer.printLine('Sample array: var myNumbers = [1, 2, 3, 4]');
    var myNumbers = [1, 2, 3, 4];

    BaseModule.Printer.printLine('Define "total" function to "myNumbers" array');
    myNumbers.total = function() {
      var add = function (a, b) {
        return a + b;
      };
      return this.reduce(add, 0);
    };

    BaseModule.Printer.printLine('Execute "total" function: myNumbers.total() = ' + myNumbers.total());
  }

  return self;
})();
