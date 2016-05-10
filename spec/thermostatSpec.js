describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase the temperature', function() {
    for (i=1; i<= 5; i++) {
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(20 + i);
    }
  });

  it('can decrease the temperature', function() {
    for (i=1; i<= 5; i++) {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(20 - i);
    }
  });

  it('will not decrease below 10 degrees', function() {
    for (i=1; i<=11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });



});
