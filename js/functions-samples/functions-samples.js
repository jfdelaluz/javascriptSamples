// -------------------------------------------------------------------------------------------------------------------//
// Function literal
var add = function (a, b) {
  return a + b;
};

BaseModule.Printer.printSectionTitle('Function Literal Sample');
BaseModule.Printer.printLine('Function created: var add = ' + add + ';');
BaseModule.Printer.printLine('Invoke result (add(1, 2)): ' + add(1, 2));
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Method Invocation Pattern
BaseModule.Printer.printSectionTitle('Method Invocation Pattern');
var myObject = {
  value: 0,
  getValue: function () {
    return this.value;
  },
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 0;
  }
};
BaseModule.Printer.printLine('Initial value: myObject.value = ' + myObject.value);
myObject.increment(1);
BaseModule.Printer.printLine('+1: myObject.value = ' + myObject.value);
myObject.increment(5);
BaseModule.Printer.printLine('+5: myObject.value = ' + myObject.value);
myObject.increment();
BaseModule.Printer.printLine('No parameter: myObject.value = ' + myObject.value);
myObject.increment('test');
BaseModule.Printer.printLine('Not a number: myObject.value = ' + myObject.value);
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Function Invocation Pattern
BaseModule.Printer.printSectionTitle('Method Invocation Pattern');
myObject.double = function () {
  var that = this;
  
  var helper = function () {
    that.value = add(that.value, that.value);
  };
  
  helper();
};

myObject.double();
BaseModule.Printer.printLine('Using "that" to access myObject.value from "helper" function: ' + myObject.getValue());
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Constructor Invocation Pattern
BaseModule.Printer.printSectionTitle('Constructor Invocation Pattern');
var Quo = function (string) {
  this.status = string;
};
Quo.prototype.get_status = function () {
  return this.status;
};
var myQuo = new Quo('confused');
BaseModule.Printer.printLine('myQuo object status: ' + myQuo.get_status());
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Apply Invocation Pattern
BaseModule.Printer.printSectionTitle('Apply Invocation Pattern');
var array = [3, 4];
var sum = add.apply(null, array);
BaseModule.Printer.printLine('Result using "apply" with add method: ' + sum);

var statusObject = {
  status: 'A-OK'
};
var status = Quo.prototype.get_status.apply(statusObject);
BaseModule.Printer.printLine('statusObject:');
BaseModule.Printer.printList(statusObject);
BaseModule.Printer.printLine('Call "get_status" method with statusObject, using apply: ' + status);
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Arguments Sample
BaseModule.Printer.printSectionTitle('Arguments Sample');
var sum = function () {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
var numbers = [4, 8, 15, 16, 23, 42];
BaseModule.Printer.printLine('Method that does not specify parameters to be received: var sum = ' + sum);
BaseModule.Printer.printLine('Arguments (numbers array): ' + numbers);
BaseModule.Printer.printLine(
  'Result from "sum" method: ' + sum(4, 8, 15, 16, 23, 42)
);
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Exceptions Sample
BaseModule.Printer.printSectionTitle('Exceptions Sample');
var addValidated = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Exceptions.NumberTypeException.get();
  }
  return a + b;
};

var try_it = function () {
  try {
    addValidated('seven', 1);
  } catch (e) {
    BaseModule.Printer.printLine(e.name + ': ' + e.message);
  }
};

try_it();
BaseModule.Printer.sectionSeparator();

