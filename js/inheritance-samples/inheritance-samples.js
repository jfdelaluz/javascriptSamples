var InheritanceSamples = (function() {
  var self = {};
  
  self.init = function() {
    augmentFunctionMethodNew();
    augmentFunctionMethodInherits();
    InheritanceSamples.Pseudoclassical.init();
    InheritanceSamples.Prototypal.init();
    InheritanceSamples.Functional.init();
  };
  
  function augmentFunctionMethodNew() {
    Function.method('new', function () {
      var that = Object.create(this.prototype);
      
      var other = this.apply(that, arguments);
      
      return (typeof other === 'object' && other) || that;
    });
  }

  function augmentFunctionMethodInherits() {
    Function.method('inherits', function (Parent) {
      this.prototype = new Parent();
      return this;
    });
  }
  
  return self;
})();
