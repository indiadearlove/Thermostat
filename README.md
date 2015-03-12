Thermostat
==========

Week 5 Project
--------------

A simple interface for a digital thermostat.

Testing:
-------
* JavaScript
* JQuery
* Jasmine

Specifications Complete:
--------------
- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting  the reset button

Specifications to be Completed:
------------------------------
- The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
- After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

Screenshot
----------

![Alt text](images/screenshot1.png "Optional title")

