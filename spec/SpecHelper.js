describe('Thermostat', function() {

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });


  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.DefaultTemperature()).toEqual(20);
    });

    it("starts with power saving mode on", function(){
      expect(thermostat.DefaultPowerSave()).toEqual("On");
    });

  });

  describe("there is a button", function(){

    it("can increase the temperature", function(){
      expect(thermostat.IncreaseTemperature(20)).toEqual(21);
    });

    it("can decrease the temperature", function(){
      expect(thermostat.DecreaseTemperature(20)).toEqual(19);
    });

  });

  describe("the temperature", function(){

    it("can not go below 10 degrees", function(){
      expect(thermostat.DecreaseTemperature(10, "On")).toEqual(10);
    });

    it("can not go above 25 with power save on", function(){
      expect(thermostat.IncreaseTemperature(25, "On")).toEqual(25);
    });

    it("can not go above 32 with power save off", function(){
      expect(thermostat.IncreaseTemperature(32, "Off")).toEqual(32);
    });

  });

});