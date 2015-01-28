var Thermostat = function () {

  var temp = 20;
  var powersave = "On";

  Thermostat.prototype.defaultTemperature = function() {
    return temp;
  };

  Thermostat.prototype.defaultPowerSave = function() {
    return powersave;
  };

  Thermostat.prototype.increaseTemperature = function(powersave) {
    if (temp == 32) return temp;
    if (temp == 25 && powersave == "On") return temp;
    return (temp += 1);
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (temp == 10) return temp;
    return (temp -= 1);
  };

  Thermostat.prototype.powerSaveOn = function(powersave) {
    return (powersave == "On");
  };

  Thermostat.prototype.powerSaveOff = function(powersave) {
    return (powersave == "Off")
  };

  Thermostat.prototype.setTemperature = function(giventemp) {
    return (temp = giventemp);
  };

};