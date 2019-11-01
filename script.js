const body = document.querySelector('body');
const titel = body.appendChild(document.createElement('h3'))
const time = body.appendChild(document.createElement('h3'))

const now = moment(); // present time
const end = moment('2021-05-28 17:00:00'); // end time
let duration = moment.duration(end - now); // gets present duration

titel.innerHTML = `Kvar tills jag blir en examinerad .NET utvecklare:`
titel.setAttribute('style', "margin-left: 30px;")
time.setAttribute('style', "margin-left: 30px;")

const minTwoDigits = (n => n < 10 ? `0${n}`: `${n}`);

setInterval( () => {
    const countdown = {
        years: minTwoDigits(duration.years()),
        months: minTwoDigits(duration.months()),
        days: minTwoDigits(duration.days()),
        hours: minTwoDigits(duration.hours()),
        minutes: minTwoDigits(duration.minutes()),
        seconds: minTwoDigits(duration.seconds())
    } 
    
    duration = moment.duration(duration - 1000); // decreasing duration by 1 sec 

    time.innerHTML = `${countdown.years} : ${countdown.months} : ${countdown.days} : ${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`;

}, 1000);


