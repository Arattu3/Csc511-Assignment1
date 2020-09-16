import Component from '@glimmer/component';
//import Component, { tracked } from '@glimmer/component';

export default class TimerTrackerComponent extends Component {

      constructor(options) {
        super(...arguments);
        this.setTime();
        this.setDate();
        this.tzone();
    }

    setTime(){
        var d = new Date();
        this.hour = d.getHours();
        this.minute = d.getMinutes();
        this.seconds = d.getSeconds();
        this.ms = d.getMilliseconds();
    }

    setDate(){
        var d = new Date();
        this.dayMonth = d.toDateString();
        this.month = d.getMonth()+1;
        this.day = d.getDate();
        this.year = d.getFullYear();
    }

    tzone(){
        var itTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
        this.tz = (new Date(itTime)); 
         }

    refresh(){
        location.reload("refresh")
    }

};