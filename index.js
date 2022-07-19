function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');


    if (hrs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
     
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime,10);
/////// set alarmTimings--------------------------------------------------------
function alarmTimings(){
    document.getElementById("wakeuptime").innerText = document.getElementById("timing").value;
    document.getElementById("lunchtime").innerText = document.getElementById("timing1").value;
    document.getElementById("naptime").innerText = document.getElementById("timing2").value;
    document.getElementById("nighttime").innerText = document.getElementById("timing3").value;
    

/////// Messages accoding to timings--------------------------------------

    let a = document.getElementById("session").innerText;
    let b = parseInt(document.getElementById("hours").innerText);
    let time = b + " " + a + " - " + (b + 1) + " " + a;
    let wakeUpTime = document.getElementById("timing").value;
    let lunchTime = document.getElementById("timing1").value;
    let napTime = document.getElementById("timing2").value;
    let nightTime = document.getElementById("timing2").value;




    if (time === wakeUpTime) {
        document.getElementById("text").innerText = "GOOD MORNING!! WAKE UP !!";
        document.getElementById("text1").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("img").src = "Component 30 – 1.png";
    } else if (time === lunchTime) {
        document.getElementById("text").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("text1").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("img").src = "Component 31 – 1.png";
    } else if (time === napTime) {
        document.getElementById("text").innerText = "GOOD EVENING !!";
        document.getElementById("text1").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("img").src = "lunch_image.png";
    } else if (time === nightTime) {
        document.getElementById("text").innerText = "GOOD NIGHT !!";
        document.getElementById("text1").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("img").src = "Component 32 – 1.png";
    } else {
        document.getElementById("text").innerText = "It's getting late!!";
        document.getElementById("text1").innerText = "It's getting late!!";
        document.getElementById("img").src = "Component 30 – 1.png";
    }

    

}
