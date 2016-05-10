describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at the default temperature', function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('starts in power saving mode', function() {
    expect(thermostat.isInPowerSavingMode()).toBeTruthy();
  });

  it('can increase the temperature', function() {
    for (i=1; i<= 5; i++) {
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE + i);
    }
  });

  it('can decrease the temperature', function() {
    for (i=1; i<= 5; i++) {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE - i);
    }
  });

  it('will not decrease below 10 degrees', function() {
    for (i=1; i<=11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

  it('will not increase above 25 degrees if power saving mode is on', function() {
    for (i=1; i<=6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.temperature()).toEqual(thermostat.MAXIMUM_TEMPERATURE);
  });

  it('can turn power saving mode off', function() {
    thermostat.togglePowerSavingMode();
    expect(thermostat.isInPowerSavingMode()).toBeFalsy();
  });

  it('can turn power saving mode on', function() {
    thermostat.togglePowerSavingMode();
    thermostat.togglePowerSavingMode();
    expect(thermostat.isInPowerSavingMode()).toBeTruthy();
  });

  it('power saving mode off sets max temp to 32', function() {
    thermostat.togglePowerSavingMode();
    expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(32);
  });

  it('can reset the temperature to default', function() {
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('colour is green when temp below 18', function() {
    for (i=1; i<=3; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.displayColour()).toEqual('green');
  });

  it('colour is yellow when temp between 18 and 24', function() {
    expect(thermostat.displayColour()).toEqual('yellow');
  });

  it('colour is red when temp above 24', function() {
    for (i=1; i<=5; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.displayColour()).toEqual('red');
  });


});
