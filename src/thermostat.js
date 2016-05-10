function Thermostat() {
  this._temperature = 20;

  this.MINIMUM_TEMPERATURE = 10;

  this.temperature = function () {
    return this._temperature;
  };

  this.increaseTemperature = function() {
    this._temperature++;
  };

  this.decreaseTemperature = function () {
    if(this._temperature > this.MINIMUM_TEMPERATURE){
      this._temperature--;
    }
  };
}
