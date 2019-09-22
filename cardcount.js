/*
	CARD COUNT
	Naive card counting program.
*/

let count = 0;

// Increments or decrements count depending on value input
function cc( value ) {

	switch(value){
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;

		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
			break;
	}
}

// Return bet or hold depending on the total count
function betOrHold(totalCount){

	if( totalCount > 0 ){
		return count + " Bet";
	}
	return count + " Hold";
}

cc(2); cc(3); cc(4); cc(5); cc(6);

alert(betOrHold(count));


