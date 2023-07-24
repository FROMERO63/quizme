var startButton = document.getElementById('readyButton');
var againButton = document.getElementById('againButton');
var highScoresButtonTwo = document.getElementById('highScoresButtonTwo');
var doneButton = document.getElementById('doneButton');
var readyContainer = document.getElementById('readyContainer');
var timeContainer = document.getElementById('timeContainer');
var againContainer = document.getElementById('againContainer');
var sideContainer = document.getElementById('sideContainer');
var scoreSubmitContainer = document.getElementById('scoreSubmitContainer');
var questionOne = document.getElementById('questionOne');
var answerOne = document.getElementsByClassName('answerOne');
var questionTwo = document.getElementById('questionTwo');
var answerTwo = document.getElementsByClassName('answerTwo');
var yourScore = document.getElementById('yourScore');
var enterIntials = document.getElementById('scoreSubmitContainer');
var submitInitials = document.getElementById('submitInitials');
var initials =document.getElementById('field');
var form =document.getElementById('form');

var seconds = 60;
var timeFormat = document.getElementById('timerFormat');

var storedItem=localStorage.getItem("storedItem");

var answerOneOne = document.getElementById('answerOneOne');
var answerOneTwo = document.getElementById('answerOneTwo');
var answerOneThree = document.getElementById('answerOneThree');
var answerOneFour = document.getElementById('answerOneFour');

var answerTwoOne = document.getElementById('answerTwoOne');
var answerTwoTwo = document.getElementById('answerTwoTwo');
var answerTwoThree = document.getElementById('answerTwoThree');
var answerTwoFour = document.getElementById('answerTwoFour');

var answerThreeOne = document.getElementById('answerThreeOne');
var answerThreeTwo = document.getElementById('answerThreeTwo');
var answerThreeThree = document.getElementById('answerThreeThree');
var answerThreeFour = document.getElementById('answerThreeFour');

var answerFourOne = document.getElementById('answerFourOne');
var answerFourTwo = document.getElementById('answerFourTwo');
var answerFourThree = document.getElementById('answerFourThree');
var answerFourFour = document.getElementById('answerFourFour');


//Start Game
startButton.addEventListener ("click", function(e){
    readyContainer.style.display = "none";
    questionOne.style.display = "block";
    setInterval(function(){
        seconds --;
        timeFormat.innerHTML = seconds;
        if(seconds <=0){
            clearInterval(seconds);
        }
    },1000)
    });


var score = 0

function Correct (){
        score += 100;
        document.getElementById('yourScore').innerHTML = score;
        if(seconds <=0){
            clearInterval(seconds);
        }
    }

function Wrong (){
        seconds=seconds-10;
            if(seconds <=0){
                clearInterval(seconds);
            }
        }


function createDivScore (){
        var newEl = document.createElement("div");
        newEl.innerHTML = "You scored " + score + "!";
        document.getElementById("scoreLocation").appendChild(newEl);
        localStorage.setItem("storedItem",initials.value);
        document.cookie = initials;
            }

/*function addToHighScores (){
        var newLi = document.createElement("li");
        newLi.innerHTML = initials.value + "   Score: " + score;
         document.getElementById("highScoresText").appendChild(newLi);
            }
*/

function Save (){
    localStorage.setItem("storedItem",initials.value);
    document.getElementById("savedText").innerHTML = initials.value + "   Score: " + score;
}

 //Question 1  
answerOneOne.addEventListener ("click", function(e){
        questionOne.style.display = "none";
        questionTwo.style.display = "block";
        var value= answerOneOne.value;
        if (value == "1"){
            Correct()
        }
        if (value == "2"){
            console.log("its false");
            Wrong();
        }
        return
        });


answerOneTwo.addEventListener ("click", function(e){
            questionOne.style.display = "none";
            questionTwo.style.display = "block";
            var value= answerOneTwo.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();
            }
            return
            });

answerOneThree.addEventListener ("click", function(e){
            questionOne.style.display = "none";
            questionTwo.style.display = "block";
            var value= answerOneThree.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();    
            }
            return
            });

answerOneFour.addEventListener ("click", function(e){
            questionOne.style.display = "none";
            questionTwo.style.display = "block";
            var value= answerOneFour.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();    
            }
            return
            });


//Question 2
answerTwoOne.addEventListener ("click", function(e){
            questionTwo.style.display = "none";
            questionThree.style.display = "block";
            var value= answerTwoOne.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();
            }
            return
            });

answerTwoTwo.addEventListener ("click", function(e){
            questionTwo.style.display = "none";
            questionThree.style.display = "block";
            var value= answerTwoTwo.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();
            }
            return
            });
            
answerTwoThree.addEventListener ("click", function(e){
            questionTwo.style.display = "none";
            questionThree.style.display = "block";
            var value= answerTwoThree.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();
            }
            return
            });

answerTwoFour.addEventListener ("click", function(e){
            questionTwo.style.display = "none";
            questionThree.style.display = "block";
            var value= answerTwoFour.value;
            if (value == "1"){
                console.log("its true")
                Correct()
            }
            if (value == "2"){
                console.log("its false");
                Wrong();
            }
            return
            });

//Question 3
answerThreeOne.addEventListener ("click", function(e){
    questionThree.style.display = "none";
    questionFour.style.display = "block";
    var value= answerThreeOne.value;
    if (value == "1"){
        console.log("its true")
        Correct()
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
    }
    return
    });

answerThreeTwo.addEventListener ("click", function(e){
    questionThree.style.display = "none";
    questionFour.style.display = "block";
    var value= answerThreeTwo.value;
    if (value == "1"){
        console.log("its true")
        Correct()
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
    }
    return
    });
    
answerThreeThree.addEventListener ("click", function(e){
    questionThree.style.display = "none";
    questionFour.style.display = "block";
    var value= answerThreeThree.value;
    if (value == "1"){
        console.log("its true")
        Correct()
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
    }
    return
    });

answerThreeFour.addEventListener ("click", function(e){
    questionThree.style.display = "none";
    questionFour.style.display = "block";
    var value= answerThreeFour.value;
    if (value == "1"){
        console.log("its true")
        Correct()
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
    }
    return
    });


//Question 4
answerFourOne.addEventListener ("click", function(e){
    questionFour.style.display = "none";
    enterIntials.style.display = "block";
    var value= answerFourOne.value;
    if (value == "1"){
        console.log("its true")
        Correct();
        createDivScore();
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
        createDivScore();
    }
    return
    });

answerFourTwo.addEventListener ("click", function(e){
    questionFour.style.display = "none";
    enterIntials.style.display = "block";
    var value= answerFourTwo.value;
    if (value == "1"){
        console.log("its true")
        Correct();
        createDivScore();
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
        createDivScore();
    }
    return
    });
    
answerFourThree.addEventListener ("click", function(e){
    questionFour.style.display = "none";
    enterIntials.style.display = "block";
    var value= answerFourThree.value;
    if (value == "1"){
        console.log("its true")
        Correct();
        createDivScore();
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
        createDivScore();
    }
    return
    });

answerFourFour.addEventListener ("click", function(e){
    questionFour.style.display = "none";
    enterIntials.style.display = "block";
    var value= answerFourFour.value;
    if (value == "1"){
        console.log("its true")
        Correct();
        createDivScore();
    }
    if (value == "2"){
        console.log("its false");
        Wrong();
        createDivScore();
    }
    return
    });


   
//Submit intials
form.addEventListener ("submit", function(e){
    e.preventDefault();
    scoreSubmitContainer.style.display = "none";
    againContainer.style.display = "block";
    Save ();
    console.log(initials.value);
    });

//Back to home
againButton.addEventListener ("click", function(e){
    e.preventDefault();
    readyContainer.style.display = "block";
    enterIntials.style.display = "none";
    console.log("ill play again");
    location.reload();
    });

highScoresButtonTwo.addEventListener ("click", function(e){
    e.preventDefault();
    sideContainer.style.display = "block";
    enterIntials.style.display = "none";
    againContainer.style.display = "none";
    timeContainer.style.display = "none";
    console.log("ill play again");
    });



