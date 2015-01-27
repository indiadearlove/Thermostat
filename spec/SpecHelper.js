describe('Thermostat', function() {

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
    thermostat.DefaultTemperature();
  });


  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.DefaultTemperature()).toEqual(20);
    });

  });

  describe("there is a button", function(){

    it("can increase the temperature", function(){
      expect(thermostat.IncreaseTemperature(20)).toEqual(21);
    });

  });

});