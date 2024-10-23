// let fname = " ";


function greet() {
    let greetparagraph = document.getElementById("greet")
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let age = document.getElementById("age").value;
greetparagraph.innerHTML = "greetings " + age + " year old "+ fname + " " + lname;


    // greetparagraph.style.color = "magenta"
}
function trivia1(){
    let triviaAnswer = document.getElementById("trivia1-answer");
    let fname = document.getElementById("fname").value;
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    if(chocolateSelected){
        triviaAnswer.innerHTML =  fname + ", you are not corrrrrreeeecccct but u likey chocolate" 
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are not corrrrrreeeecccct but u likey tuna"
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", u smart u know honey no age"
    }
}

function Truths(){
    let truthsAnswer = document.getElementById("truths-answer");
    let fname = document.getElementById("fname").value;
    let AbSelected = document.getElementById("Ab").checked; 
    let AcSelected = document.getElementById("Ac").checked;
    let AdSelected = document.getElementById("Ad").checked;
    if(AbSelected){
        truthsAnswer.innerHTML =  " you got it right " + fname + " i like to not get injured every day"
    }
    else if (AcSelected) {
        truthsAnswer.innerHTML =  " i have done rock climbing " + fname + " good try though"

    }
    else if (AdSelected) {
        truthsAnswer.innerHTML =  " i am in the middle of driving school " + fname
    }
}


function falses(){
    let falseAnswer = document.getElementById("false-Answer");
    let fname = document.getElementById("fname").value;
    let AbaSelected = document.getElementById("Aba").checked; 
    let AcbSelected = document.getElementById("Acb").checked;
    let AdcSelected = document.getElementById("Adc").checked;

    // if(AbaSelected){
    //     falseAnswer.innerHTML =  " you got it right " + fname + " i like to not get injured every day"
    // }
    // else if (AcbSelected) {
    //     falseAnswer.innerHTML =  " i have done rock climbing " + fname + " good try though"

    // }
    // else if (AdcSelected) {
    //     falseAnswer.innerHTML =  " i am in the middle of driving school " + fname
    // }


    // else
     if (AdcSelected && AbaSelected) {
        falseAnswer.innerHTML =  " one correct " + fname
    }
    else if (AdcSelected && AcbSelected) {
        falseAnswer.innerHTML =  " both are true " + fname
    }

    else if (AcbSelected && AbaSelected) {
        falseAnswer.innerHTML =  " one correct " + fname
    }
}