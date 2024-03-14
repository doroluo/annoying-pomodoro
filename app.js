var time = Date.now();
var tf_min = 0.1*60*1000;
time = new Date(time + tf_min);
var f_seconds = 5*1000;
var annoying_notif_1 = new Audio("epic_notification_spam.mp3");
var annoying_notif_2 = new Audio("LORAX.mp3");
var annoying_notif_3 = new Audio("thomas.mp3");
annoying_notif_1.loop = true;
annoying_notif_2.loop = true;
annoying_notif_3.loop = true;
annoying_notif_2.volume = 0.75;
annoying_notif_3.volume = 0.75;
let interval;

function set_time() {
    // need to reset time with every call
    time = Date.now();
    tf_min = 25*60*1000;    // 25  minutes
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
        document.getElementById("timer").innerHTML = `<button class="countdown_clock">` + format_time + `</button>`;
    }
    else {
        document.getElementById("timer").innerHTML = `
            <button class="stop_timer" onclick="stop_timer()">
                <b>STOP</b>
            </button>
        `;

        // clearInterval(interval);
        // play the notif sounds one by one
        // OH GOD THIS HURTS SO BADDDDD
        annoying_notif_1.play();
        annoying_notif_2.play();
        annoying_notif_3.play();
        clearInterval(interval);
    }
}

function stop_timer() {
    // stop the notifications

    annoying_notif_1.pause();
    annoying_notif_1.currentTime = 0;
    annoying_notif_2.pause();
    annoying_notif_2.currentTime = 0;
    annoying_notif_3.pause();
    annoying_notif_3.currentTime = 0;
    // annoying_notif.src = annoying_notif.src;
    document.getElementById("timer").innerHTML = `
    <button class="start_timer" onclick="start_timer()">
        <b>start</b>
    </button>
    `;

    // clearInterval(interval);
}