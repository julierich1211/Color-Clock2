window.onload = full;

function full() {
    "use strict";

    function check() {
        try {
            display();
        } catch (e) {
            console.log("error:", e, e.stack);
        }
    }

    function display() {
        var d = new Date();
        var components = ['getHours', 'getMinutes', 'getSeconds'];
        var factor = components.map(function(functionName) {
            var n = d[functionName]();
            return n < 10 ? "0" + n : n;
        });

        span.textContent = factor.join(":");

        body.style['background-color'] =
            "rgb(" +
            changeRGB(factor).join(',') +
            ")";


    }


    function changeRGB(timing) {
        if (!(timing instanceof Array) || timing.length !== 3) {
            throw new Error("not 3");
        }

        var item = [24, 60, 60],
            value = [];

        timing.forEach(function(time, index) {
            value[index] = ~~(time / item[index] * 221);
        });

        return value;
    }

    var span = document.querySelector('.clock span');
    var body = document.querySelector('body');

    setInterval(check, 1000);
}
