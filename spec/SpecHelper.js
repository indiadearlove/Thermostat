describe('Thermostat', function() {

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });


  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.defaultTemperature).toEqual(20);
    });

    it("starts with power saving mode on", function(){
      expect(thermostat.powerSaving).toEqual("On");
    });

  });

  describe("there is a button", function(){

    it("can increase the temperature", function(){
      expect(thermostat.increaseTemperature(1)).toEqual(21);
    });

    it("can decrease the temperature", function(){
      expect(thermostat.decreaseTemperature(1)).toEqual(19);
    });

  });

  describe("the temperature", function(){

    it("can not go below 10 degrees", function(){
      thermostat.decreaseTemperature(10)
      expect(thermostat.decreaseTemperature(1)).toEqual(10);
    });

    it("can not go above 25 with power save on", function(){
      thermostat.increaseTemperature(4);
      expect(thermostat.increaseTemperature(1)).toEqual(25);
    });

    it("can not go above 32 with power save off", function(){
      thermostat.togglePowerSaving();
      thermostat.increaseTemperature(12);
      expect(thermostat.increaseTemperature(1)).toEqual(32);
    });

  });

});