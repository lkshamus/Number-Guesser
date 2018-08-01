o
var randomNum;
var clearButton = document.querySelector('#clear');
var valueInput = document.querySelector('#value');
var resetButton = document.querySelector('#reset');
var originalMin = 1;
var originalMax = 100;
var numberMin = 1;
var numberMax = 100;
var guess;


// this generates a random number
function genNum(){
	randomNum = Math.floor(Math.random() * Math.floor(numberMax + numberMin)) 
};


//this makes sure the input is valid and between range numbers
function getUserInput (){
	var minNum = parseInt(document.getElementById("min").value);
	var maxNum = parseInt(document.getElementById("max").value);
	if (minNum === null && maxNum === null){
		console.log('no range given')
	}
	else if (maxNum > minNum && Number.isInteger(maxNum) && Number.isInteger(minNum)){
		// this condition will be true if new range values have been set
		if(originalMin !== minNum && originalMax !== maxNum){
			numberMax = maxNum;
			numberMin = minNum;
			originalMin = minNum;
			originalMax = maxNum;
			genNum(); 
			console.log("Updated Range Randome Number: "+ randomNum)
	
		}
	}
	var guessInput = parseInt(document.getElementById("value").value);
	// IsNaN will return true if not a number 
	console.log("Random Number is : " + randomNum)
	
	if (isNaN(guessInput) || guessInput < numberMin || guessInput > numberMax ) {
        document.getElementById("outOfRange").innerText =`ERROR! Your guess must between 
        ${numberMin} and ${numberMax}`;
    } else {
    	document.getElementById("outOfRange").innerText = null;
    	// this will be called if it is valid user input
    	guessLogic(guessInput)
    }
};

//this tells the user if their number is correct, if its higher
//or lower
function guessLogic(guess){
  if (randomNum > guess){
  	document.getElementById("userGuess").innerText = guess;
  	document.getElementById("statement").innerText = "Your last guess was";
  	document.getElementById("response").innerText = "That is too low";	
    }
  else if (randomNum < guess ){
  		document.getElementById("userGuess").innerText = guess;
  		document.getElementById("statement").innerText = "Your last guess was";
  		document.getElementById("response").innerText = "That is too high";	
    }
  else{
  		winner(guess)
    }
}

function winner(guess){
  	document.getElementById("userGuess").innerText = guess;
  	document.getElementById("statement").innerText = "Your last guess was";
  	document.getElementById("response").innerText = "BOOM!";
  	numberMin -= 10;
  	numberMax += 10;
 }

valueInput.addEventListener('keyup', function(){	
if(valueInput.value.length == 0){
    clearButton.disabled = true;
  } else if (valueInput.value.length > 0){
   clearButton.disabled = false;
   }
});

valueInput.addEventListener('keyup', function(){
if(valueInput.value.length == 0){
    resetButton.disabled = true;
  }else if(valueInput.value.length > 0){
   resetButton.disabled = false;
}
});

function resetGame(){
	genNum();
	console.log('Resetting Game Now, new random number: '+ randomNum)
	document.getElementById("userGuess").innerText = "";
	document.getElementById("guessRange").innerText = `Guess Between ${numberMin} 
	and ${numberMax} or Set Your Range!`
	document.getElementById("outOfRange").innerText = null;
	document.getElementById("statement").innerText = "";
	document.getElementById("value").value = null
}


// this function takes away the error message when clicking clear
function clearFunction(){
	document.getElementById("outOfRange").innerText = null;
}



