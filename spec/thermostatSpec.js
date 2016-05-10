describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('starts in power saving mode', function() {
    expect(thermostat.isInPowerSavingMode()).toBeTruthy();
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


});
