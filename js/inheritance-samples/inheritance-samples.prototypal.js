InheritanceSamples.Prototypal = (function () {
  var self = {},
      myMammal;

  self.init = function () {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Prototypal', fileAndLineIdentifier);
    createObjectLiteral();
    createInstance();
    BaseModule.Printer.sectionSeparator();
  };

  function createObjectLiteral() {
    BaseModule.Printer.printLine('Define "myMammal" object');
    myMammal = {
      name: 'Herb the Mammal',
      get_name: function () {
        return this.name;
      },
      says: function () {
        return this.saying || '';
      }
    };

    BaseModule.Printer.printLine('myMammal name: myMammal.name =  ' + myMammal.name);
    BaseModule.Printer.printLine('myMammal name: myMammal.get_name() =  ' + myMammal.get_name());
    BaseModule.Printer.printLine('myMammal saying: myMammal.saying =  ' + myMammal.saying);
    BaseModule.Printer.printLine('myMammal saying: myMammal.says() =  ' + myMammal.says());
  }

  function createInstance() {
    BaseModule.Printer.printLine('Create "myCat" instance from "myMammal"');
    var myCat = Object.create(myMammal);
    myCat.name = 'Henrietta';
    myCat.saying = 'meow';
    myCat.purr = function (n) {
      var i, s ='';
      for (i = 0; i < n; i++) {
        if (s) {
          s += '-';
        }
        s += 'r';
      }
      return s;
    };
    myCat.get_name = function () {
      return this.says() + ' ' + this.name + ' ' + this.says();
    };

    BaseModule.Printer.printLine('myCat name: myCat.name = ' + myCat.name);
    BaseModule.Printer.printLine('myCat name: myCat.get_name() = ' + myCat.get_name());
    BaseModule.Printer.printLine('myCat saying: myCat.saying = ' + myCat.saying);
    BaseModule.Printer.printLine('myCat saying: myCat.says() = ' + myCat.says());
    BaseModule.Printer.printLine('myCat purr: myCat.purr(4) = ' + myCat.purr(4));
  }

  return self;
})();
