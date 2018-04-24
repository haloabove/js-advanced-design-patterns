var MainApp = function () {
	this.options = {
		param    	: 	1,
		wrapperId 	: 'wrapId',
		items	    : [1,2],
		alertMsg	: 'Hello World!'
	};
	this.selected = document.getElementById(this.options.wrapperId);
	this.init();
};

MainApp.prototype.init = function(){
	this.attachEventListeners();
	this.exeMain();
};

MainApp.prototype.attachEventListeners = function(){
	this.select.addEventListener("click", function(e){
    	this.go();
	});
};

MainApp.prototype.go = function() {
	SetTimeout(function(){
		console.log('App is running')
		this.stop();
	},300);
}.bind(this);

MainApp.prototype.stop = function() {
	alert(this.options.alertMsg);
};

MainApp.prototype = {
  now: function() {

  },
  later: function() {

  }
};

if (mainApp == undefined || mainApp === {})
	var mainApp = new MainApp;