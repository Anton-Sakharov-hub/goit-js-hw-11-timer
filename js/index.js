
class CountdownTimer {
   constructor ({selector, targetDate}) {
       this.targetDate = targetDate;
       this.refs = {
           days: document.querySelector(`${selector} span[data-value="days"]`),
           hours: document.querySelector(`${selector} span[data-value="hours"]`),
           mins: document.querySelector(`${selector} span[data-value="mins"]`),
           secs: document.querySelector(`${selector}  span[data-value="secs"]`),
       };

    };

    pad(value) {
        return String(value).padStart(2, '0');
    };
    
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    };
    
    updateClockface({ days, hours, mins, secs }) {
        this.refs.days.textContent = `${days}:`;
        this.refs.hours.textContent = `${hours}:`;
        this.refs.mins.textContent = `${mins}:`;
        this.refs.secs.textContent = `${secs}:`;
    };

    timeCounter() {
        const nowTime = Date.now();
        const time = this.targetDate - nowTime;
        const { days, hours, mins, secs } = this.getTimeComponents(time);

        this.updateClockface({ days, hours, mins, secs })
        
    };

    startCounter() {
        setInterval(this.timeCounter.bind(this), 1000);
    };

};

const timer = new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Jul 17, 2022') });
timer.startCounter();
const timer2 = new CountdownTimer({ selector: '#timer-2', targetDate: new Date('Jan 17, 2023') });
timer2.startCounter();



























