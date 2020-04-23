var timer = null;


var changeToState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    var countdownNumber = 10
    document.getElementById("countdown").innerHTML = countdownNumber;


    if (state == 2) {

        timer = setInterval(() => {

            countdownNumber = countdownNumber - 1

            document.getElementById("countdown").innerHTML = countdownNumber;
            if (countdownNumber == 9 && countdownNumber >= 3) {
                document.getElementById("showNervous").className = 'nervous show';
            } else {
                document.getElementById("showNervous").className = 'nervous';

            }
            if (countdownNumber == 7 && countdownNumber > 1) {
                document.getElementById("showCantWait").className = 'cant-wait show';
            } else {
                document.getElementById("showCantWait").className = 'cant-wait';
            }
        
        if (countdownNumber <= 0) {
            changeToState(3);
        }
    }, 500);
} else if (state == 3) {
    var success = setTimeout(function () {
        var randomNumber = Math.round(Math.random() * 10)
        console.log("random Number: " + randomNumber)
        //success
        if (randomNumber > 5) {
            changeToState(4);
            //do something 
        } else {
            changeToState(5);
            //do something else 
        }
    }, 1000);
}
}
