InheritanceSamples.Pseudoclassical = (function () {
  var self = {},
      Mammal,
      Cat,
      Dog;

  self.init = function () {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Pseudoclassical', fileAndLineIdentifier);
    createMammalObject();
    createCatPseudoclass();
    createDogPseudoclass();
    BaseModule.Printer.sectionSeparator();
  };

  function createMammalObject() {
    BaseModule.Printer.printLine('Create "Mammal" constructor with augmented "new" method on "Function" object');
    Mammal = function (name) {
      this.name = name;
    };

    Mammal.prototype.get_name = function () {
      return this.name;
    };

    Mammal.prototype.says = function () {
      return this.saying || '';
    };
    
    BaseModule.Printer.printLine('Create instance from "Mammal": var myMammal = new Mammal(\'Herb the Mammal\');');
    var myMammal = new Mammal('Herb the Mammal');
    var name = myMammal.get_name();
    BaseModule.Printer.printLine('New instance property: var name = myMammal.get_name(); = ' + name);
  }

  function createCatPseudoclass() {
    BaseModule.Printer.printLine('Create "Cat" pseudoclass that inherits from "Mammal"');
    Cat = function (name) {
      this.name = name;
      this.saying = 'meow';
    };

    Cat.prototype = new Mammal();

    Cat.prototype.purr = function (n) {
      var i, s = '';
      for (i = 0; i < n; i++) {
        if (s) {
          s += '-';
        }
        s += 'r';
      }
      return s;
    };

    Cat.prototype.get_name = function () {
      return this.says() + ' ' + this.name + ' ' + this.says();
    };

    BaseModule.Printer.printLine('Create instance from "Cat": var myCat = new Cat(\'Henrietta\');');
    var myCat = new Cat('Henrietta');
    BaseModule.Printer.printLine('Execute myCat "says" method: myCat.says() = ' + myCat.says());
    BaseModule.Printer.printLine('Execute myCat "purr" method: myCat.purr(5) = ' + myCat.purr(5));
    BaseModule.Printer.printLine('"Cat" pseudoclass "purr" method exists: typeof Cat.prototype.purr = ' + typeof Cat.prototype.purr);
    BaseModule.Printer.printLine('"Mammal" does not have "purr" method: typeof Mammal.prototype.purr = ' + typeof Mammal.prototype.purr);
    BaseModule.Printer.printLine(
      'New instance created "myCat" has access to "get_name" method: myCat.get_name() = ' + myCat.get_name()
    );
  }

  function createDogPseudoclass() {
    BaseModule.Printer.printLine('Create "Dog" pseudoclass with augmented "inherits" method on "Function" object');
    Dog = function (name) {
      this.name = name;
      this.saying = 'arf';
    }
    .inherits(Mammal)
    .method('run', function (n) {
      var i, s = '';
      for (i = 0; i < n; i++) {
        if (s) {
          s += '-';
        }
        s += 'running';
      }
      return s;
    })
    .method('get_name', function () {
      return this.says() + ' ' + this.name + ' ' + this.says();
    });

    var myDog = new Dog('Spunky');
    BaseModule.Printer.printLine('Execute myDog "says" method: myDog.says() = ' + myDog.says());
    BaseModule.Printer.printLine('Execute myDog "run" method: myDog.run(3) = ' + myDog.run(3));
    BaseModule.Printer.printLine('"Dog" pseudoclass "run" method exists: typeof Dog.prototype.run = ' + typeof Dog.prototype.run);
    BaseModule.Printer.printLine('"Mammal" does not have "run" method: typeof Mammal.prototype.run = ' + typeof Mammal.prototype.run);
    BaseModule.Printer.printLine(
      'New instance created "myDog" has access to "get_name" method: myDog.get_name() = ' + myDog.get_name()
    );
  }

  return self;
})();
