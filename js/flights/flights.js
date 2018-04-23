var Flights = (function() {
  var self = {},
      singleFlight;
  
  self.init = function() {
    initFlight();
    flightProperties();
    displayDefaultValuesForUndefinedProperties();
    validationForPropertiesOfUndefined();
    getPropertiesTypes();
    checkIfObjectHasProperty();
  };
  
  function initFlight() {
    singleFlight = {
      airline: "Oceanic",
      number: 815,
      departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55:00",
        city: "Sydney"
      },
      arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42:00",
        city: "Los Angeles"
      }
    };
  }
  
  function flightProperties() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Flight Properties', fileAndLineIdentifier);
    BaseModule.Printer.printLine('Airline: ' + singleFlight.airline);
    BaseModule.Printer.printLine('Number: ' + singleFlight.number);
    BaseModule.Printer.printLine('Departure IATA: ' + singleFlight.departure.IATA);
    BaseModule.Printer.printLine('Departure Time: ' + singleFlight.departure.time);
    BaseModule.Printer.printLine('Departure City: ' + singleFlight.departure.city);
    BaseModule.Printer.printLine('Arrival IATA: ' + singleFlight.arrival.IATA);
    BaseModule.Printer.printLine('Arrival Time: ' + singleFlight.arrival.time);
    BaseModule.Printer.printLine('Arrival City: ' + singleFlight.arrival.city);
    BaseModule.Printer.sectionSeparator();
  }
  
  function displayDefaultValuesForUndefinedProperties() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Display Default Values For Undefined Properties', fileAndLineIdentifier);
    BaseModule.Printer.printLine('Status: ' + (singleFlight.status || 'Default Status'));
    singleFlight.status = 'overdue';
    BaseModule.Printer.printLine('Status Defined: ' + (singleFlight.status || 'Default Status'));
    BaseModule.Printer.sectionSeparator();
  }
  
  function validationForPropertiesOfUndefined() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Validation For Properties Of Undefined', fileAndLineIdentifier);
    BaseModule.Printer.printLine('Equipment Undefined: ' + singleFlight.equipment);
    BaseModule.Printer.printLine(
      'Equipment Model Undefined (No Type Error): ' + (singleFlight.equipment && singleFlight.equipment.model)
    );
    singleFlight.equipment = {
      model: "Boeing 777"
    };
    BaseModule.Printer.printLine('Equipment Defined:');
    BaseModule.Printer.printList(singleFlight.equipment);
    BaseModule.Printer.printLine(
      'Equipment Model Defined: ' + (singleFlight.equipment && singleFlight.equipment.model)
    );
    BaseModule.Printer.sectionSeparator();
  }
  
  function getPropertiesTypes() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle('Get Properties Types Using "typeof"', fileAndLineIdentifier);
    BaseModule.Printer.printLine('Flight number type: ' + typeof singleFlight.number);
    BaseModule.Printer.printLine('Flight status type: ' + typeof singleFlight.status);
    BaseModule.Printer.printLine('Flight arrival type: ' + typeof singleFlight.arrival);
    BaseModule.Printer.printLine('Flight manifest type: ' + typeof singleFlight.manifest);
    BaseModule.Printer.printLine('Flight type: ' + typeof singleFlight);
    BaseModule.Printer.printLine('Flight toString type: ' + typeof singleFlight.toString);
    BaseModule.Printer.printLine('Flight constructor type: ' + typeof singleFlight.constructor);
    BaseModule.Printer.sectionSeparator();
  }
  
  function checkIfObjectHasProperty() {
    var fileAndLineIdentifier = new Error();
    BaseModule.Printer.printSectionTitle(
      'Check If Object Has Property Before Get Property\'s type Using "hasOwnProperty"',
      fileAndLineIdentifier
    );
    BaseModule.Printer.printLine('Flight has number property: ' + singleFlight.hasOwnProperty('number'));
    BaseModule.Printer.printLine('Flight has arrival property: ' + singleFlight.hasOwnProperty('arrival'));
    BaseModule.Printer.printLine('Flight has manifest property: ' + singleFlight.hasOwnProperty('manifest'));
    BaseModule.Printer.printLine(
      'Flight has constructor(method, not property) property: ' + singleFlight.hasOwnProperty('constructor')
    );
    BaseModule.Printer.sectionSeparator();
  }
  
  return self;
})();
