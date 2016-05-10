function Thermostat() {

  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this._temperature = 20;
  this._isInPowerSavingMode = true;


  this.temperature = function () {
    return this._temperature;
  };

  this.increaseTemperature = function() {
    if(this._temperature < this.MAXIMUM_TEMPERATURE){
      this._temperature++;
    }
  };

  this.decreaseTemperature = function() {
    if(this._temperature > this.MINIMUM_TEMPERATURE){
      this._temperature--;
    }
  };

  this.isInPowerSavingMode = function() {
    return this._isInPowerSavingMode;
  };

  this.togglePowerSavingMode = function() {
    this._isInPowerSavingMode = !this._isInPowerSavingMode;
    this._setMaxTemperature();
  };

  this._setMaxTemperature = function() {
    if(this._isInPowerSavingMode) {
      this.MAXIMUM_TEMPERATURE = 25;
    } else {
      this.MAXIMUM_TEMPERATURE = 32;
    }
  };
}
