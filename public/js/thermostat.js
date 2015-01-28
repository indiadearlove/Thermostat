var Thermostat = function () {

  var temp = 20;
  var powersave = "On";

  Thermostat.prototype.defaultTemperature = function() {
    return temp;
  };

  Thermostat.prototype.defaultPowerSave = function() {
    return powersave;
  };

  Thermostat.prototype.increaseTemperature = function() {
    if (temp == 32) return temp;
    if (temp > 24 && powersave == "On") return temp = 25;
    return (temp += 1);
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (temp == 10) return temp;
    return (temp -= 1);
  };

  Thermostat.prototype.powerSaveOn = function() {
    return powersave = "On";
  };

  Thermostat.prototype.powerSaveOff = function() {
    return powersave = "Off";
  };

  Thermostat.prototype.changePowerSave = function() {
    if (powersave == "Off") return powersave = "On";
    return powersave = "Off";
  };

  Thermostat.prototype.setTemperature = function(giventemp) {
    if (giventemp < 10) return temp;
    if (powersave == "On" && giventemp > 25) return temp;
    if (giventemp > 32) return temp;
    return (temp = giventemp);
  };

};