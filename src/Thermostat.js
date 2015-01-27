var Thermostat = function () {

  Thermostat.prototype.DefaultTemperature = function(temp) {
    return (temp = 20);
  };

  Thermostat.prototype.IncreaseTemperature = function(temp) {
    if (temp == 25) return temp;
    return (temp += 1);
  };

  Thermostat.prototype.DecreaseTemperature = function(temp) {
    if (temp == 10) return temp;
    return (temp -= 1);
  };

};