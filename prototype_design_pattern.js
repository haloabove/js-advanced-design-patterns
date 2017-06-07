var CarModels = function() {
	this.options = {
		numWheels    : 4,
		manufacturer : 'Tesla',
		make         : 'Model S',
		stopped		 : 'I have stopped the car !'
	};
	this.numWheels    = 4;
	this.manufacturer = 'Tesla';
	this.make         = 'Model S';
	this.select : document.getElementById(this.options.make);

	this.init();
};

CarModels.prototype.init = function(){
	this.attachEventListeners();
	this.go();
};

CarModels.prototype.attachEventListeners = function(){
	this.select.addEventListener("click", function(){
    	this.go();
	});
};

CarModels.prototype.go = function() {
	SetTimeout(function(){
		this.stop();
	},300);
}.bind(this);

CarModels.prototype.stop = function() {
	alert(this.options.stopped);
};

CarModels.prototype = {
  now: function() {

  },
  later: function() {

  }
};