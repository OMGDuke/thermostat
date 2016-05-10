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

});
