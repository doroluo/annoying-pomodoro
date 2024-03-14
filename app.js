var time = Date.now();
var tf_min = 0.1*60*1000;
time = new Date(time + tf_min);
var annoying_notif = new Audio("epic_notification_spam.mp3");
annoying_notif.loop = true;
let interval;

function set_time() {
    // need to reset time with every call
    time = Date.now();
    tf_min = 0.1*60*1000;
    time = new Date(time + tf_min);
}

function start_timer() {
    set_time();
    interval = setInterval(countdown, 5);
    countdown();
}

function countdown() {
    // countdown clock
    var elapsed_time = time - Date.now();
    // convert into minutes + seconds

    var total_time = Math.floor(elapsed_time/1000)
    var minutes = Math.floor(total_time/60);
    var seconds = total_time - minutes*60;

    var format_time = minutes + ':' + seconds;
    
    if (elapsed_time > 0) {
        document.getElementById("timer").innerHTML = `<div class="countdown_clock"><h1>` + format_time + `</h1></div>`;
    }
    else {
        document.getElementById("timer").innerHTML = `
            <button class="stop_timer" onclick="stop_timer()">
                <b>STOP</b>
            </button>
        `;
        // annoying_notif.volume = 1;
        annoying_notif.play();
        clearInterval(interval);
    }
}

function stop_timer() {
    // stop the notifications

    // clearInterval(interval);
    annoying_notif.pause();
    annoying_notif.currentTime = 0;
    // annoying_notif.src = annoying_notif.src;
    document.getElementById("timer").innerHTML = `
    <button class="start_timer" onclick="start_timer()">
        <b>start</b>
    </button>
    `;

    // clearInterval(interval);
}