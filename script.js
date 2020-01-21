var rangeSlider = document.getElementById("sliderRange");
var outputSlider = document.getElementById("currentRange");
var outputText = document.getElementById("textToReadWrapper");
var startBtn = document.getElementById("startBtn");
var hilightColor = "#206eff59"
var stop = true

rangeSlider.oninput = function () {
    output.innerHTML = this.value
}

var textToAdd = [
    "There", "are,", "however,", "many", "Texans", "who", "still", "dress", "like", "cowboys.", "They", "wear", "cowboy", "boots", "and", "a", "kind", "of", "tall", "cowboy", "hat", "they", "call", "a", "ten-", "gallon-", "hat", "because", "it", "looks", "as", "if", "it", "could", "hold", "that", "much", "water.", "Another", "symbol", "of", "Texas", "is", "the", "oil", "well.", "Texas", "produces", "more", "oil", "than", "any", "other", "state.", "Oil", "was", "first", "discovered", "near", "the", "city", "of", "Houston", "in", "the", "early", "1900s."
]

 for (i = 0; i < textToAdd.length; i++){
        // document.getElementById("textToRead").innerHTML += textArray[i] + " "
     document.getElementById("textToReadWrapper").innerHTML += '<span>' + textToAdd[i] + " " 
        
    }

function readText(){

    // s = document.getElementById("textToRead").value;
    // s = s.replace(/(^\s*)|(\s*$)/gi, "");
    // s = s.replace(/[ ]{2,}/gi, " ");
    // s = s.replace(/\n /, "\n");
    // var textArray = s.split(' ');
    // console.log(textArray)

    function getEl(i){
        setTimeout(function(){
            document.getElementById("textToReadWrapper").childNodes[i + 1].innerHTML = "<span style='background-color: yellow;'>" + textToAdd[i] + " "
        }, 60000 / output.innerHTML * i)
    }
            }
            else{
                console.log("hi")
                return window.stop = true
            }
        }, 60000 / outputSlider.innerHTML * i)
    }

    for (i = 0; i < textToAdd.length; i++){
        // document.getElementById("textToRead").innerHTML += textArray[i] + " "
        // document.getElementById("textToReadWrapper").childNodes[i+1].innerHTML = '<b>' + textToAdd[i] + " "
        getEl(i)
        
    }

    
}