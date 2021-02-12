/*
* Excercise 1
*
*/

const click =  document.getElementById("color-block");
const text = document.getElementById("color-name");
console.log(text.innerHTML);


/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    
    //Write a condition determine what color it should be changed to

    if(text.innerHTML === "#F08080"){
    
        //change the background color using JS
        click.style.backgroundColor = "purple";
        //Change the text of the color using the span id color-name
        text.innerHTML = "purple";

    }
    else{
        //change the background color using JS
        click.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        text.innerHTML = "#F08080";
    }
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){

    var f = document.getElementById("f-input").value;
    //Calculate the temperature here
    var c = (f - 32) * (5/9);

    document.getElementById("c-output").innerText = c;

    //Send the calculated temperature to HTML

}


