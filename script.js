var rangeSlider = document.getElementById("sliderRange");
var outputSlider = document.getElementById("currentRange");
var outputText = document.getElementById("textToReadWrapper");
var startBtn = document.getElementById("startBtn");
var hilightColor = "#206eff59"
var stop = true

var textToAdd = [
    "There", "are,", "however,", "many", "Texans", "who", "still", "dress", "like", "cowboys.", "They", "wear", "cowboy", "boots", "and", "a", "kind", "of", "tall", "cowboy", "hat", "they", "call", "a", "ten-", "gallon-", "hat", "because", "it", "looks", "as", "if", "it", "could", "hold", "that", "much", "water.", "Another", "symbol", "of", "Texas", "is", "the", "oil", "well.", "Texas", "produces", "more", "oil", "than", "any", "other", "state.", "Oil", "was", "first", "discovered", "near", "the", "city", "of", "Houston", "in", "the", "early", "1900s."
]

function getTextArr(text){
    // s = document.getElementById("textToRead").value;
    // s = text
    // s = s.replace(/(^\s*)|(\s*$)/gi, "");
    // s = s.replace(/[ ]{2,}/gi, " ");
    // s = s.replace(/\n /, "\n");
    // var textArray = s.split(' ');
    // console.log(textArray)
}

function readSlider(){
    outputSlider.innerHTML = rangeSlider.value;
    rangeSlider.oninput = function () {
        outputSlider.innerHTML = this.value
    }
}

function initText(text){
    document.getElementById("textToReadWrapper").innerHTML = "" 
    for (i = 0; i < textToAdd.length; i++){
        document.getElementById("textToReadWrapper").innerHTML +='<span>' + text[i] + " "
    }
}

function readText(){

    function getEl(i){
        setTimeout(function(){
            if (window.stop == false) {
                var nodeLength = outputText.childNodes.length - 1
                // Gets node and highlidghts it, then removed the highlught off the previous node.
                console.log(outputText.childNodes[i].innerHTML)
                outputText.childNodes[i].innerHTML = "<span style='background-color:" + hilightColor + ";'>" + textToAdd[i] + "</span>" + " "
                outputText.childNodes[i-1].innerHTML = "<span>" + textToAdd[i - 1] + " "
                
                // Function to wait x seconds before removing highlight on last node.
                if (outputText.childNodes[i + 1].innerHTML == outputText.childNodes[nodeLength].innerHTML){
                    setTimeout(function(){
                        outputText.childNodes[nodeLength].innerHTML = "<span>" + textToAdd[i] + " "
                    }, 60000 / outputSlider.innerHTML)
                }
            }
            else{
                console.log("hi")
                return window.stop = true
            }
        }, 60000 / outputSlider.innerHTML * i)
    }
    
    // For loop that iterates through the text array and runs the above function, wait x seconds before proceeding.
    if(startBtn.innerHTML == "Start"){
        for (i = 0; i < textToAdd.length; i++){
            if (window.stop == true) {
                getEl(i)
            }
            else{
                console.log("break")
                break
            }       
                }
        window.stop = false
        startBtn.innerHTML = "Stop"
        console.log(window.stop)
    }
    else{
        startBtn.innerHTML = "Start"
        window.stop = true
        console.log(window.stop)
        initText(textToAdd)
    }

    
}

// getTextArr(textToAdd)
initText(textToAdd)
readSlider()