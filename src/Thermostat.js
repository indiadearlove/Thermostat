var Thermostat = function () {

  Thermostat.prototype.DefaultTemperature = function(temp) {
    return (temp = 20);
  };

  Thermostat.prototype.IncreaseTemperature = function(temp) {
    return (temp += 1);
  };

  Thermostat.prototype.DecreaseTemperature = function(temp) {
    return (temp -= 1);
  };

};