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
BaseModule.Printer.printLine('myQuo object status using "get_status" function: ' + myQuo.get_status());
BaseModule.Printer.printLine('myQuo "status" variable accessed directly(myQuo.status): ' + myQuo.status);
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

// -------------------------------------------------------------------------------------------------------------------//
// Augmenting Types Sample
BaseModule.Printer.printSectionTitle('Augmenting Types Sample');
BaseModule.Printer.printLine('Get integer from number using parseInt(-10/3): ' + parseInt(-10/3));
Function.prototype.method = function (name, func) {
  if (this.prototype[name] !== true) {
    this.prototype[name] = func;
    return this;
  }
};
Number.method('integer', function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});
BaseModule.Printer.printLine('Augmenting "Number" type with "integer" method');
BaseModule.Printer.printLine(
  'Get integer from number with custom integer method (-10/3).integer(): ' + (-10/3).integer()
);
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Recursion Sample
BaseModule.Printer.printSectionTitle('Recursion Sample');
var elements;
var walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

var getElementsByAttribute = function (att, value) {
  var results = [];
  walk_the_DOM(document.body, function (node) {
    var actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
      results.push(node);
    }
  });
  return results;
};

elements = getElementsByAttribute('class', 'menuElement');
BaseModule.Printer.printLine('Walking the DOM, searching for anchors with "menuElement" class');
for (var i = 0; i < elements.length; i++) {
  BaseModule.Printer.printLine(
    'Href Attribute Value: ' + elements[i].getAttribute('href') +
    ', Class Attribute Value: ' + elements[i].getAttribute('class')
  );
}

var factorial = function factorial(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
};
BaseModule.Printer.printLine('Factorial result with 4: ' + factorial(4));
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Scope Sample
BaseModule.Printer.printSectionTitle('Scope Sample');
var foo = function () {
  var a = 3, b = 5;
  BaseModule.Printer.printLine('Function "foo", defined variables: a = ' + a + ', b = ' + b);
  
  var bar = function () {
    var b = 7, c = 11;
    BaseModule.Printer.printLine(
      'Function "bar" inside "foo", a = ' + a + ' (from "foo"), defined variables: b = ' + b + ', c = ' + c
    );
    a += b + c;
    BaseModule.Printer.printLine(
      'New values after "a += b + c" expression inside "bar": a = ' + a + ', b = ' + b + ', c = ' +c
    );
  };
  
  bar();
  
  BaseModule.Printer.printLine(
    'Values outside "bar" function: a = ' + a + ', b = ' + b + ', c = ' + typeof c + ', it is defined inside "bar"'
  );
};
foo();
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Closure Sample
BaseModule.Printer.printSectionTitle('Closure Sample');
var myClosureObject = function () {
  var value = 0;
  
  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 0;
    },
    getValue: function () {
      return value;
    }
  };
}();
BaseModule.Printer.printLine(
  'Accesing "value" defined in myClosureObject using myClosureObject.value: ' + myClosureObject.value
);
BaseModule.Printer.printLine(
  'Accesing "value" using myClosureObject.getValue function: ' + myClosureObject.getValue()
);
myClosureObject.increment(2);
BaseModule.Printer.printLine('New "value" after using myClosure.increment function: ' + myClosureObject.getValue());

var quoClosure = function (status) {
  return {
    get_status: function () {
      return status;
    }
  };
};
var myQuoClosure = quoClosure('amazed');
BaseModule.Printer.printLine('Object myQuoClosure "get_status" function result: ' + myQuoClosure.get_status());
BaseModule.Printer.printLine('Object myQuoClosure access to "status" variable result: ' + myQuoClosure.status);

var attributes = {
  'id': 'color-changer'
};
BaseModule.Printer.printLine('Element created to test closures', attributes);
var fade = function (node) {
  var level = 1;
  var step = function () {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFFF' + hex + hex;
    if (level < 15) {
      level += 1;
      setTimeout(step, 100);
    }
  };
  setTimeout(step, 100);
};
fade(document.getElementById('color-changer'));

BaseModule.Printer.printLine('Test Nodes');
for (var i = 1; i <= 10; i++) {
  var nodeAttributes = {
    'class': i < 6 ? 'testNodeWrong' : 'testNodeCorrect'
  };
  BaseModule.Printer.printLine(
    i < 6 ? 'Test Wrong Node ' + i : 'Test Correct Node ' + (i - 5),
    nodeAttributes
  );
}

var add_the_handlers_wrong = function (nodes) {
  var i;
  for (i = 0; i < nodes.length; i ++) {
    nodes[i].onclick = function (e) {
      alert('"i" variable is being incremented, so all nodes display the last value of "i": ' + i);
    }
  }
};
add_the_handlers_wrong(getElementsByAttribute('class', 'testNodeWrong'));

var add_the_handlers_correct = function (nodes) {
  var i;
  for (i = 0; i < nodes.length; i ++) {
    nodes[i].onclick = function (i) {
      return function (e) {
        alert('A function is declared and invoked immediately, bound to the current value of "i": ' + i);
      };
    }(i);
  }
};
add_the_handlers_correct(getElementsByAttribute('class', 'testNodeCorrect'));
BaseModule.Printer.sectionSeparator();

// -------------------------------------------------------------------------------------------------------------------//
// Callbacks Sample
BaseModule.Printer.printSectionTitle('Callbacks Sample');

BaseModule.Printer.sectionSeparator();

