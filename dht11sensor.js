'use strict';

const rpiDhtSensor = require('rpi-dht-sensor');

const DEFAULT_OPTIONS = {
    pin: 25 // defaults to 1
    // defaults to 0x77
  };
  
  function Sensor(options) {
    options = Object.assign(DEFAULT_OPTIONS, options || {});
    var dht = new rpiDhtSensor.DHT11(25);
  }

  Sensor.prototype.init() = function(callback){
      this.DHT11.init()
      .then(callback)
      .catch((err)=> {
        console.error(err)
      });
  }
  Sensor.prototype.read = function (callback) {
    this.dht.read()
      .then((data) => {
        data.temperature = data.temperature.fixed(2);
        data.humidity = data.humidity.fixed(2);
        callback(null, data);
      })
      .catch(callback);
  }

  

  module.exports = Sensor;