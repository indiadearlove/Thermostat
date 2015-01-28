describe('Thermostat', function() {

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });


  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.defaultTemperature()).toEqual(20);
    });

    it("starts with power saving mode on", function(){
      expect(thermostat.defaultPowerSave()).toEqual("On");
    });

  });

  describe("there is a button", function(){

    it("can increase the temperature", function(){
      expect(thermostat.increaseTemperature()).toEqual(21);
    });

    it("can decrease the temperature", function(){
      expect(thermostat.decreaseTemperature()).toEqual(19);
    });

  });

  describe("the temperature", function(){

    it("can not go below 10 degrees", function(){
      thermostat.setTemperature(10)
      expect(thermostat.decreaseTemperature("On")).toEqual(10);
    });

    it("can not go above 25 with power save on", function(){
      thermostat.setTemperature(25)
      expect(thermostat.increaseTemperature("On")).toEqual(25);
    });

    it("can not go above 32 with power save off", function(){
      thermostat.setTemperature(32)
      expect(thermostat.increaseTemperature("Off")).toEqual(32);
    });

  });

});