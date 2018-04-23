var InheritanceSamples = (function() {
  var self = {},
      Mammal;
  
  self.init = function() {
    augmentFunctionMethodNew();
    createMammalObject();
  };
  
  function augmentFunctionMethodNew() {
    Function.method('new', function () {
      var that = Object.create(this.prototype);
      
      var other = this.apply(that, arguments);
      
      return (typeof other === 'object' && other) || that;
    });
  }
  
  function createMammalObject() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Pseudoclassical', fileAndLineIdentifier);
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
    
    BaseModule.Printer.sectionSeparator();
  }
  
  return self;
})();
