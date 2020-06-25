console.log('js working');

let timer = setInterval(TimerHandler,1000);
let seconds = 0;
let minutes = 0;
let hours = 0;

let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');
let reset_btn = document.getElementById('reset');
let timer_div= document.getElementById('timer');
start_btn.addEventListener("click",function(){
    timer= setInterval(TimerHandler,1000);
    reset_btn.disabled=true;
    
});


stop_btn.addEventListener("click",function(){
    timer= clearInterval(timer);
    reset_btn.disabled=false;
})
reset_btn.addEventListener("click",function(){
    reset_btn.disabled=true;

    seconds=0;
    minutes=0
    hours=0;
    timer_div.innerHTML= "00:00:00";
})
function TimerHandler(){
 seconds++;
 if(seconds==60){
     seconds=0;
     minutes++;
 }
 if(minutes==60){
     minutes=0;
     hours++;
 }
 DisplayTime();
 console.log(`${hours}:${minutes}:${seconds}`)
}
function DisplayTime(){
    let change_sec = seconds;
    let change_min = minutes;
    let change_hours = hours;
  
    if(seconds<10){
        change_sec= '0'+seconds;
    }
    if(minutes<10){
        change_min= '0'+minutes;
    }
    if(hours<10){
        change_hours= '0'+hours
    }

    timer_div.innerHTML= `${change_hours}:${change_min}:${change_sec}`
}

