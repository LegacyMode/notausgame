if ("ontouchstart" in document.documentElement) {
	//Check if it is a touch device
	//Touch Device
	document.write("1"); //If this line is removed it is not working anymore, not sure why.

	var theElement = document.body;

	theElement.addEventListener("mouseup", tapOrClick, false);
	theElement.addEventListener("touchend", tapOrClick, false);

	//Players
	var current_player = "choose-niklas";
	var new_player;

	function tapOrClick(event) {
	   //handle tap or click.

	   var xCoord = event.clientX;
	   var yCoord = event.clientY;

	   var intViewportWidth = window.innerWidth;

	   var middle = intViewportWidth/2;

	   console.log("Middle: " + middle);
	   console.log("X: " + xCoord);


	   if (xCoord < middle+40 && xCoord > middle-40) {
	   	//alert("Joschi");

	   	new_player = "choose-joschi"
	   	$(".arrow").removeClass(current_player);
			$(".arrow").addClass(new_player);
			current_player = new_player;

	    event.preventDefault();
	    return false;
		}

		if (xCoord > middle+40) {
	   	//alert("Toni");

	   	new_player = "choose-toni"
	   	$(".arrow").removeClass(current_player);
			$(".arrow").addClass(new_player);
			current_player = new_player;

	    event.preventDefault();
	    return false;
		}

		if (xCoord < middle-40) {
	   	//alert("Niklas");

	   	new_player = "choose-niklas"
	   	$(".arrow").removeClass(current_player);
			$(".arrow").addClass(new_player);
			current_player = new_player;

	    event.preventDefault();
	    return false;
		}
	}

} else {
	//No Touch Device
	function print_arrow_key(keyCodeNumber) {
	    // console.log(keyCodeNumber);
	    var LEFT = 37,
	        UP = 38,
	        RIGHT = 39,
	        DOWN = 40,
	        ENTER = 13;

	    switch (keyCodeNumber) {
	    case LEFT:
	        switchPlayer("left");
	        break;
	    case RIGHT:
	        switchPlayer("right");
	        break;
	    case ENTER:
	        //go to index.html
	        self.location="../ReDesign/index.html";
	        break;
	    default:
	        //alert("Default");
	        break;
	    }

	    key_arrow_or_other.innerHTML += ' (keyCode: ' + keyCodeNumber + ')';
}

function checkKeycode(event) {
    // handling Internet Explorer stupidity with window.event
    // @see http://stackoverflow.com/a/3985882/517705
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

    print_arrow_key(keycode);

    return false;
}

var players = ["choose-niklas", "choose-joschi", "choose-toni"];
var current_player = 0;

function switchPlayer(direction) {

	var new_player;

	if (direction == "right") {
		new_player = current_player+1;
	}

	if (direction == "left") {
		new_player = current_player-1;
	}
	console.log(new_player);

	$(".arrow").removeClass(players[mod(current_player, 3)]);
	$(".arrow").addClass(players[mod(new_player, 3)]);

	current_player = new_player;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

document.onkeydown = checkKeycode;


//********************************************************
//********************************************************
//********************************************************
//********************************************************

}
