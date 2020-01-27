window.onload = function(){
    var hilightColor = "#206eff59"
    var rangeSlider = document.getElementById("sliderRange");
    var outputSlider = document.getElementById("currentRange");
    var outputText = document.getElementById("textToReadWrapper");
    var startBtn = document.getElementById("startBtn");
    var clockOutput = document.getElementById("clockOutput");
    var seconds = 0;
    var n = 0
    var Interval;
    var text;
    var textArray;
    var textToAdd;
    clockOutput.innerHTML = seconds

    startBtn.onclick = function(){
        if(startBtn.innerHTML == "Start"){
            startTimer()
            readText()
            startBtn.innerHTML = "Stop"
            Interval = setInterval(startTimer, 1000);
            // text = setInterval(readText, 100)
            text = setInterval(readText, 60000 / outputSlider.innerHTML)
            
        }else{
            startBtn.innerHTML = "Start"
            clearInterval(Interval);
            clearInterval(text);
            clearHighlight()
            seconds = 0
            n = 0
            clockOutput.innerHTML = seconds
        }
    } 

    // Stops hilighting words
    function clearHighlight(){
        outputText.childNodes[n - 1].innerHTML = "<span>" + textToAdd[n - 1] + " "
    }

    // Starts higlighing words
    function readText() {
        var nodeLength = outputText.childNodes.length - 1
        outputText.childNodes[n].innerHTML = "<span style='background-color:" + hilightColor + ";'>" + textToAdd[n] + "</span>" + " "
        if (outputText.childNodes[n - 1]) {
            clearHighlight()
        }
        if (outputText.childNodes[n + 1].innerHTML == outputText.childNodes[nodeLength].innerHTML) { // Function to wait x seconds before removing highlight on last node.
            setTimeout(function () {
                outputText.childNodes[nodeLength].innerHTML = "<span>" + textToAdd[n + 1] + " "
            }, 60000 / outputSlider.innerHTML)
        }
        n++
    }

    // Starts the timer
    function startTimer() {
        seconds++;        
        clockOutput.innerHTML = seconds;
    }

    // Displays the initial text on screen.
    function initText(text){
        document.getElementById("textToReadWrapper").innerHTML = "" 
        for (i = 0; i < textToAdd.length; i++){
            document.getElementById("textToReadWrapper").innerHTML +='<span>' + text[i] + " "
        }
    }

    //Reads value of slider
    function readSlider(){
        outputSlider.innerHTML = rangeSlider.value;
        rangeSlider.oninput = function () {
            outputSlider.innerHTML = this.value
        }
    }

    // Turns text on HTML into an array
    function getTextArr() {
        s = document.getElementById("textToReadWrapper").innerHTML;
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        textToAdd = s.split(' ');

    }

    getTextArr()
    initText(textToAdd)
    readSlider()
}