var ModulePattern = (function() {
	this.options = {
		contents:'contents'
	};

  	// declare private variables and/or functions
	var contents = this.options.contents;

  	var changeHTML = function() {
	    var element = document.getElementById('attribute-to-change');
	    	element.innerHTML = contents;
  	};

	return {
		// declare public variables and/or functions
		callChangeHTML: function() {
		  changeHTML();
		  console.log(contents);
		}
	};

})();

ModulePattern.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined