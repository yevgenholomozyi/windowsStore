const timer = () => {
    const deadline = '2020-07-30';

    function getTimeRemaining(remainingTime) {
        let t = Date.parse(remainingTime) - Date.parse(new Date()), // converts dates to milsec and finds a diff
            seconds = Math.floor((t / 1000) % 60), // converts milsec to sec; divides into 60 (as minutes) and get a remainder
            minutes = Math.floor((t / 1000 / 60) % 60), // converts milsec  to min; divides into 60 twice (as min and hours) and get a remainder 
            hours = Math.floor((t / (1000 * 60 * 60)) % 24), // converts mil ser to hours; divides into 60 twice 
            days = Math.floor(t / 1000 / 60 / 60 / 24); // // converts milsec to days;
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    } // end of getTimeRemaining function

    function addZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(endtime) {
        const days = document.getElementById('days'),
            hours = document.getElementById('hours'),
            minutes = document.getElementById('minutes'),
            seconds = document.getElementById('seconds'),
            timeInterval = setInterval(upDateClock, 1000);

        upDateClock(); // udDateClock is called here to prevent a 1 second break between  DOM loading and the timer update

        function upDateClock() {
            let t = getTimeRemaining(endtime);
            if (t.total > 0) {
                days.textContent = addZero(t.days),
                    hours.textContent = addZero(t.hours),
                    minutes.textContent = addZero(t.minutes),
                    seconds.textContent = addZero(t.seconds);
            } else {
                days.textContent = '0',
                    hours.textContent = '0',
                    minutes.textContent = '0',
                    seconds.textContent = '0';
                clearInterval(timeInterval);
            }
        }
    }
    setClock(deadline);
}
export default timer;