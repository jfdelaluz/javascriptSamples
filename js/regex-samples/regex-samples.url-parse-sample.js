RegexSamples.UrlParseSample = (function () {
  var self = {},
      parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

  self.init = function() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Url Parse Sample', fileAndLineIdentifier);
    parseUrlSample();
    parseNumberSample();
    BaseModule.Printer.sectionSeparator();
  };

  function parseUrlSample() {
    var url = "http://www.ora.com:80/goodparts?q#fragment";
    BaseModule.Printer.printLine('Test url to be parsed: ' + url);

    var result = parse_url.exec(url);

    var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

    var i;

    for (i = 0; i < names.length; i++) {
      BaseModule.Printer.printLine(names[i] + ' ==> ' + result[i]);
    }
  }

  function parseNumberSample() {
    BaseModule.Printer.printLine('Parse string to test if they are numbers');
    var testNumbers = ['1', 'number', '98.6', '132.21.8.100', '123.45E-67', '123.45D-67'];
    BaseModule.Printer.printLine('Items to be tested: ' + testNumbers);

    var testNumberMethod = function (num) {
      return parse_number.test(num);
    };

    for (i = 0; i < testNumbers.length; i++) {
      BaseModule.Printer.printLine(
        'Is ' + testNumbers[i] + ' a number? -> ' + (testNumberMethod(testNumbers[i]) ? 'Yes':'No')
      );
    }
  }

  return self;
})();
