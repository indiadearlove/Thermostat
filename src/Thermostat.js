var Thermostat = function () {

  Thermostat.prototype.DefaultTemperature = function(temp) {
    return (temp = 20);
  };

  Thermostat.prototype.IncreaseTemperature = function(temp, powersave) {
    if (temp == 32) return temp;
    if (temp == 25 && powersave == "On") return temp;
    return (temp += 1);
  };

  Thermostat.prototype.DecreaseTemperature = function(temp) {
    if (temp == 10) return temp;
    return (temp -= 1);
  };

  Thermostat.prototype.PowerSaveOn = function(powersave) {
    return (powersave == "On");
  };

  Thermostat.prototype.PowerSaveOff = function(powersave) {
    return (powersave == "Off")
  };

};