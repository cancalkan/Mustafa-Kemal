function addZero(n) {
    return n < 10 ? "0" + n : n
}
var deathTime = new Date('November 10, 1938 09:05:00').getTime();

function end() {
    var currentTime = new Date().getTime();
    gap =  currentTime - deathTime;
    var second = 1000;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var year = 365.25 * day;

    var yearcount = Math.floor((gap/(year)));
    var daycount = Math.floor((gap  % (year)) / (day) );
    var hourcount = Math.floor((gap % (day)) / (hour));
    var monthcount = Math.floor((gap % (hour)) / (minute));
    var secondcount = Math.floor((gap % (minute)) / second);
   


    document.getElementById('day').innerText = addZero(daycount);
    document.getElementById('hour').innerText = addZero(hourcount);
    document.getElementById('minute').innerText = addZero(monthcount);
    document.getElementById('year').innerText = addZero(yearcount);
        // document.getElementById('second').innerText = addZero(secondcount);


    console.log(daycount,hourcount,monthcount,secondcount,yearcount)

}
setInterval(function () {
    end();
}, 1000)

