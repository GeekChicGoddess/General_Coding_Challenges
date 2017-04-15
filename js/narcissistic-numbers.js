/**
 * Created by melodytempleton on 4/15/17.
 */
"use strict";
setTimeout(function(){
var number = 0;
var narcissisticNumbers = [];
var narcissisticNumbrsLength = "0";
while (narcissisticNumbrsLength < 25){

    var numberAsArray = (""+number).split("");
    var m = numberAsArray.length;

    for (var i = 0; i < numberAsArray.length; i++){
        numberAsArray[i] = parseInt(numberAsArray[i], 10);
    }

    var sumDigitsRTPower = 0;
    for ( var j = 0; j < numberAsArray.length; j++) {
        sumDigitsRTPower += Math.pow([numberAsArray[j]], [m]);
    }
    if (sumDigitsRTPower === number){
        narcissisticNumbers.push(number);
        narcissisticNumbrsLength ++;
    }

    number++;

}

var theResult = document.getElementById("theResult");
theResult.innerText = narcissisticNumbers;
}, 0);