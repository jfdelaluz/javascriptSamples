ArraySamples.Dimensions = (function () {
  var self = {};

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Dimensions', fileAndLineIdentifier);
    addDimFunctionToArray();
    addMatrixFunctionToArray();
    addIdentityFunctionToArray();
    createArrayInitialized();
    arrayOfArraysSample();
    createMatrixInitialized();
    createIdentityMatrix();
    BaseModule.Printer.sectionSeparator();
  };

  function addDimFunctionToArray() {
    BaseModule.Printer.printLine('Add "dim" function to "Array" object');
    Array.dim = function (dimension, initial) {
      var a = [], i;
      for (i = 0; i < dimension; i++) {
        a[i] = initial;
      }
      return a;
    };
  }

  function addMatrixFunctionToArray() {
    BaseModule.Printer.printLine('Add "matrix" function to "Array" object');
    Array.matrix = function (m, n, initial) {
      var mat = [], a, i, j;
      for (i = 0; i < m; i++) {
        a = [];
        for (j = 0; j < n; j++) {
          a[j] = initial;
        }
        mat[i] = a;
      }
      return mat;
    };
  }

  function addIdentityFunctionToArray() {
    Array.identity = function (n) {
      var i, mat = Array.matrix(n, n, 0);
      for (i = 0; i < n; i++) {
        mat[i][i] = 1;
      }
      return mat;
    };
  }

  function createArrayInitialized() {
    BaseModule.Printer.printLine(
      'Create test array with default content, using Array.dim(array size, element initial value): ' +
      'var testArray = Array.dim(10, 0);'
    );
    var testArray = Array.dim(10, 0);
    BaseModule.Printer.printLine('"testArray" length: ' + testArray.length);
    BaseModule.Printer.printLine('"testArray" content: ' + testArray);
  }

  function arrayOfArraysSample() {
    BaseModule.Printer.printLine('Array of arrays sample');
    var matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    BaseModule.Printer.printLine('"matrix" content: ' + matrix);
    BaseModule.Printer.printLine('"matrix" first element content: matrix[0] = ' + matrix[0]);
    BaseModule.Printer.printLine('"matrix" first element, element\'s element content: matrix[0][1] = ' + matrix[0][1]);
  }

  function createMatrixInitialized() {
    BaseModule.Printer.printLine(
      'Create test matrix with default content, ' +
      'using Array.matrix(array size, sub-array size, element initial value): ' +
      'var testMatrix = Array.matrix(3, 3, 0);'
    );
    var testMatrix = Array.matrix(3, 3, 0);

    BaseModule.Printer.printLine('"testMatrix" content: ' + testMatrix);
    BaseModule.Printer.printLine('"testMatrix" second element content: testMatrix[1] = ' + testMatrix[1]);
    BaseModule.Printer.printLine(
      '"testMatrix" second element, element\'s element content: testMatrix[1][1] = ' +
      testMatrix[1][1]);
  }

  function createIdentityMatrix() {
    BaseModule.Printer.printLine('Create identity matrix: var identityMatrix = Array.identity(3);');
    var identityMatrix = Array.identity(3);

    BaseModule.Printer.printLine('"identityMatrix" content: ' + identityMatrix);
    BaseModule.Printer.printLine('"identityMatrix" third element content: identityMatrix[2] = ' + identityMatrix[2]);
    BaseModule.Printer.printLine(
      '"identityMatrix" third element, third sub-element content: identityMatrix[2][2] = ' + identityMatrix[2][2]
    );
  }

  return self;
})();
