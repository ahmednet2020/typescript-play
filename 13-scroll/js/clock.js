/* this function for time */

function time() {
    "use strict";
    var clock1 = new Date();/* clock1.setHours(clock1.getHours() - 1); */ /*to add or fixed time in hosting server*/
    var hours = clock1.getHours(),m1 = "am";/* to know time PM or AM*/
    var mint = clock1.getMinutes();
    var sec = clock1.getSeconds();
    var year = clock1.getFullYear().toString();
    var mont = Number(clock1.getMonth().toString());
    var day1 = clock1.getDate().toString();
    var day2 = Number(clock1.getDay());
    var day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    if (hours > 12)hours-=12,m1 = "pm";/*fix if for am pm*//* input html*/
    document.getElementById("number1").value =
        ((hours < 10) ?  "0" + hours : hours) + ":" + ((mint < 10) ?  "0" + mint : mint) + ":" + ((sec < 10) ?  "0" + sec : sec);
    document.getElementById("m2").innerHTML = m1;/* pm or am text*/
    document.getElementById("number1").title = day1 + "/" + (mont + 1) + "/" + year;/*title on hover in time*/
    document.getElementById("m2").title = day[day2];   
}
 setInterval(time, 1000);