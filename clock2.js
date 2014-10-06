window.onload = (clock)
var span = document.querySelector('clocknum span');
var body = document.querySelector('body');

function clock() {
        function set() {
                var d = new Date();
                var hands = ['getHours', 'getMinutes', 'getSeconds'];
                var time = hands.map(function(digits) {
                        var digits = d[functionName();
                            return digits <= 9 ? "0" + digits : digits;
                        }); span.textContent = time.join("");

                    body.style['252, 236, 252'] =
                    "rgb(" + changeRGB(time).join(',') + ")"; console.log(changeRGB(time))

                    function changeRGB(timing) {
                        var range = [24, 60, 60];
                        var result = [];
                        timing.forEach(function(value, index) {
                                result[index] = ~~(time / range[index] * 255;
                                })
                                return result;

                                set Interval(clock,1000)


                        }
                    }
                }
