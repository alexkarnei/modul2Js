var time = {
    hour: 20,
    min: 45,
    sec: 5,
};

function printTime(time) {
    return time.hour + ":" + time.min + ":" + time.sec;
}

alert(printTime(time));

function addSeconds(time, secToChange) {
    time.sec = time.sec + secToChange;
    if (time.sec >= 60) {
        time.sec = time.sec - 60;
        time.min = time.min + 1;
        if (time.min >= 60) {
            time.min = time.min - 60;
            time.hour = time.hour + 1;
        }
    }
    return time;
}

var secToChange = +prompt("Количество секунд на которое необходимо изменить время", "");
addSeconds(time, secToChange);
alert(printTime(time));

function addMinute(time, minToChange) {
    time.min = time.min + minToChange;
    if (time.min >= 60) {
        time.min = time.min - 60;
        time.hour = time.hour + 1;
    }
    return time;
}

var minToChange = +prompt("Количество минут на которое необходимо изменить время", "");
addMinute(time, minToChange);
alert(printTime(time));

function addHour(time, hourToChange) {
    time.hour = time.hour + hourToChange;
    if (time.hour >= 24) {
        time.hour = time.hour - 24;
    }
    return time;
}

var hourToChange = +prompt("Количество часов на которое необходимо изменить время", "");
addHour(time, hourToChange);
alert(printTime(time));
