let minutes=0;
let seconds=0;
let hours=0;

//define var to hold setInterval 
let interval=null;

//logic of when to increament the values
function stopwatch(){
    seconds++;

    // nested if statements for when to increament the values
if(seconds/60===1){
    seconds=0;
    minutes++;
if(minutes/60===1){
    minutes=0;
    hours++;
}
}
//display time to the user
document.getElementById("display").innerHTML=hours+":"+minutes+":"+seconds;


}

function startstop(){
    if(status=="stopped"){
       interval= window.setInterval(stopwatch,100);  
        document.getElementById("startstop").innerHTML='stop';
     status="started";

    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML='start';
        status="stopped";
    }
}
//function for reseting the stopwatch
function reset(){
    window.clearInterval(interval)
    minutes=0;
    seconds=0;
    hours=0;
    document.getElementById("display").innerHTML='00:00:00';
    document.getElementById("startstop").innerHTML='start';
}
