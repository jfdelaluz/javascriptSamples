var BaseModule = (function () {
  var self = {};
  
  self.init = function() {
    BaseModule.Utils.createMethod();
    BaseModule.Utils.augmentFunctionType();
  };
  
  return self;
})();
