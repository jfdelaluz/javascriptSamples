BaseModule.Utils = (function() {
  var self = {};
  
  self.createMethod = function() {
    if (typeof Object.create !== 'function') {
      Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
      };
    }
  };
  
  self.capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  return self;
})();
