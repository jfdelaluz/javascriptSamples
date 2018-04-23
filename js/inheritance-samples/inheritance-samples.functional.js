InheritanceSamples.Functional = (function () {
  var self = {},
      mammal,
      cat;

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Functional', fileAndLineIdentifier);
    augmentObjectMEthodSuperior();
    createObjectWithPrivateProperties();
    createObjectFromMammal();
    createObjectUsingSuperiorMethod();
    BaseModule.Printer.sectionSeparator();
  };

  function augmentObjectMEthodSuperior() {
    Object.method('superior', function (name) {
      var that = this,
          method = that[name];
      return function () {
        return method.apply(that, arguments);
      };
    });
  }

  function createObjectWithPrivateProperties() {
    BaseModule.Printer.printLine('Create "mammal" object with private properties and methods');
    mammal = function (spec) {
      var that = {};

      that.get_name = function() {
        return spec.name;
      };

      that.says = function() {
        return spec.saying || '';
      };

      return that;
    };

    BaseModule.Printer.printLine('Instance new object from "mammal": var myMammal = mammal({name: \'Herb\'})');
    var myMammal = mammal({name: 'Herb'});

    BaseModule.Printer.printLine(
      'Cannot access name property directly from the object: myMammal.name = ' + myMammal.name
    );
    BaseModule.Printer.printLine(
      'Access "myMammal" name property using public method: myMammal.get_name() = ' + myMammal.get_name()
    );
  }

  function createObjectFromMammal() {
    BaseModule.Printer.printLine('Create "cat" object from "mammal"');
    cat = function (spec) {
      spec.saying = spec.saying || 'meow';
      var that = mammal(spec);
      that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i++) {
          if (s) {
            s += '-';
          }
          s += 'r';
        }
        return s;
      };
      that.get_name = function() {
        return that.says() + ' ' + spec.name + ' ' + that.says();
      };

      return that;
    };

    BaseModule.Printer.printLine('Instance new object from "cat": var myCat = cat({name: \'Henrietta\'})');
    var myCat = cat({name: 'Henrietta'});

    BaseModule.Printer.printLine('No access to object properties: myCat.name = ' + myCat.name);
    BaseModule.Printer.printLine(
      'Access to object proeprties with public method: myCat.get_name() = ' + myCat.get_name()
    );
    BaseModule.Printer.printLine('Access to "myCat" "purr" method: myCat.purr(5) = ' + myCat.purr(5));
  }

  function createObjectUsingSuperiorMethod() {
    BaseModule.Printer.printLine('Create "coolCat" object');
    var coolcat = function (spec) {
      var that = cat(spec),
          super_get_name = that.superior('get_name');

      that.get_name = function (n) {
        return 'like ' + super_get_name() + ' baby';
      };

      return that;
    };

    BaseModule.Printer.printLine('Create instance from coolCat: myCoolCat = coolCat({name: \'Bix\'})');
    var myCoolCat = coolcat({name: 'Bix'});
    BaseModule.Printer.printLine('"myCoolCat" name: myCoolCat.get_name() = ' + myCoolCat.get_name());
  }

  return self;
})();
