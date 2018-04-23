Exceptions.NumberTypeException = (function() {
  var self = {};
  
  self.get = function () {
    return {
      name: 'NumberTypeError',
      message: 'number parameter expected'
    };
  };
  
  return self;
})();
