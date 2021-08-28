
const refs = {
    days: document.querySelector("[data-value='days']"),
    hours: document.querySelector("[data-value='hours']"),
    minutes: document.querySelector("[data-value='mins']"),
    seconds: document.querySelector("[data-value='secs']"),
}
class CountdownTimer{
    constructor(countdownTimerObject){
        this.selector = countdownTimerObject.selector;
        this.targetDate = countdownTimerObject.targetDate;
    }
}
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 28, 2022'),
  });

// let days;

// let hours;
  
// let mins;
  
// let secs;

 const changeTime = () =>{
    const realDate = new Date();
    const time = timer.targetDate.getTime() - realDate.getTime();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    //console.log(secs);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = mins; 
    refs.seconds.textContent = secs;
 } 

 const timerId = setInterval(changeTime, 1000);
console.log('Days', days);
console.log('Hours', hours);
console.log('Minutes', mins);
console.log('Seconds', secs);