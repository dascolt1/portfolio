//easter egg
		var allowedKeys = {
	  37: 'left',
	  38: 'up',
	  39: 'right',
	  40: 'down',
	  65: 'a',
	  66: 'b'
	};

	// the 'official' Konami Code sequence
	var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

	var konamiCodePosition = 0;

	document.addEventListener('keydown', function(e) {

		
	  if (allowedKeys[e.keyCode] == konamiCode[konamiCodePosition]) {

	    
	    konamiCodePosition++;

	    if (konamiCodePosition == konamiCode.length) {
	      activateEgg();
	      konamiCodePosition = 0;
	    }
	  } else {
	    konamiCodePosition = 0;
	  }
	});

	function activateEgg() {

	  alert("RHappy hacking :) - Monty");

	}