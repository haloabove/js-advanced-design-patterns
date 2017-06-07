var CarModels = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

CarModels.prototype = function() {

  var go = function() {
    // Rotate wheels
  };

  var stop = function() {
    // Apply brake pads
  };

  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  }

}();