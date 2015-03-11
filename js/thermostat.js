var Thermostat = function() {
  this.temperature = 20;
  this.defaultTemperature = 20;
  this.minTemperature = 10;
  this.powerSaving = "On";
  this.away = false;
  this.energyColour = "medium-usage";
  this.powerSavingColour = "blue"
};

Thermostat.prototype.maxTemp = function() {
  if (this.powerSaving === "On") {return 25;} else {return 32;}
};


Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature + changeTempBy;
  if (newTemp < this.maxTemp()) {return this.temperature = newTemp} 
  else {return this.temperature = this.maxTemp();}
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  this.temperature -= changeTempBy;
  if (this.temperature < this.minTemperature) {return this.temperature = this.minTemperature}
  else {return this.temperature};
};

Thermostat.prototype.togglePowerSaving = function() {
  if (this.powerSaving === "On") {
    this.powerSaving = "Off";
    this.powerSavingColour = "nothing";
    return this.powerSaving;
  }
  else {this.powerSaving = "On"; this.powerSavingColour = "blue";
    if (this.temperature > this.maxTemp()) {this.temperature = this.maxTemp();}
    return this.powerSaving;
  }
};

Thermostat.prototype.resetButton = function() {
  return this.temperature = this.defaultTemperature;
};

Thermostat.prototype.tempColour = function() {
  if (this.temperature < 19) {this.energyColour = "low-usage";}
  else if (this.temperature > 24) {this.energyColour = "high-usage";}
  else {this.energyColour = "medium-usage";}
};

Thermostat.prototype.toggleAway = function() {
  if (this.away === false) {
    this.away = true;
    this.temperature = this.minTemperature;
  }
  else {
    this.away = false;
    this.temperature = this.defaultTemperature;
  };
};

Thermostat.prototype.currentTime = function() {
  var date = new Date()
  var hour = date.getHours();
  var min = date.getMinutes();
  return hour + ':' + min
};