function Thermostat() {

  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this._isInPowerSavingMode = true;

  }

  Thermostat.prototype.temperature = function() {
    return this._temperature;
  };

  Thermostat.prototype.increaseTemperature = function() {
    if(this._temperature < this.MAXIMUM_TEMPERATURE){
      this._temperature++;
    }
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if(this._temperature > this.MINIMUM_TEMPERATURE){
      this._temperature--;
    }
  };

  Thermostat.prototype.isInPowerSavingMode = function() {
    return this._isInPowerSavingMode;
  };

  Thermostat.prototype.togglePowerSavingMode = function() {
    this._isInPowerSavingMode = !this._isInPowerSavingMode;
    this._setMaxTemperature();
  };

  Thermostat.prototype.resetTemperature = function() {
    this._temperature = this.DEFAULT_TEMPERATURE;
  };

  Thermostat.prototype.displayColour = function() {
    if(this._temperature < 18){
      return 'green';
    } else if(this._temperature > 24) {
      return 'red';
    } else {
      return 'yellow';
    }
  };

  Thermostat.prototype._setMaxTemperature = function() {
    if(this._isInPowerSavingMode) {
      this.MAXIMUM_TEMPERATURE = 25;
    } else {
      this.MAXIMUM_TEMPERATURE = 32;
    }
  };
