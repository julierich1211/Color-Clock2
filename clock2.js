window.onload = full;

function full() { //this starts a function that will hold all factors within the production and 
//function of clock and changing background "the shoebox"
    "use strict";

    function check() {//this is going to test my "display" functions ability to execute properly
        try {
            display();
        } catch (e) {
            console.log("error:", e, e.stack);// "error" will display in the console to let know something isnt working. 
            //You can have the computer throw whatever statement to the console log to alert of things not working.
        }
    }

    function display() { // Using an Array formula for the basic function of the clock and its components,"00:00:00"
        var d = new Date();
        var components = ['getHours', 'getMinutes', 'getSeconds'];
        var factor = components.map(function(functionName) { //breaks down the array data into an uncombined form, deals with 
        //each variable seperately to produce the value the function is requesting.
            var n = d[functionName](); //this gives the value produced after mapping a variable which allows for 
            //instuctions or functions to be added with the produced value. 
            return n < 10 ? "0" + n : n; //telling computer how to format produced value, using "if it this=do this"
            //"if it is not that=do this" format based on true/false of the value within the return statement.
        });

        span.textContent = factor.join(":"); //span is from HTML page will join value produced by factor variable in Java in this (":") format

        body.style['background-color'] = //body is HTML tag for what we are styling, we are telling the computer to tie the background
        // color to use the rgb code (221,221,221) to take result of changeRGB function and join with factor function to produce 
        // the timing and changes to the background color//
            "rgb(" +
            changeRGB(factor).join(',') +
            ")";


    }


    function changeRGB(timing) {
        if (!(timing instanceof Array) || timing.length !== 3) { //in this function the if statment(true/false) is telling the computer 
        // produced value is an array, and it must be 3 variables if not throw error "not3"// 
            throw new Error("not 3");
        }

        var item = [24, 60, 60], //breaking down the full range of variable with in the array 24 hours in a day, 
        // 60 minutes in an hour,60 seconds in a minute.  
            value = []; //leaving this blank tells the computer inside of the [] will be produced based on array produced within the function.

        timing.forEach(function(time, index) { // for each value in the timing array, will be run through this function and the return 
        //will be the produced time00:00:00/ ranges[24,60,60], then that value will be multiplied by 221. or whatever number color representaion you choose.
            value[index] = ~~(time / item[index] * 221);
        });

        return value;
    }

    var span = document.querySelector('.clock span'); //naming a variable for HTML page location 
    var body = document.querySelector('body');//naming a variable for HTML page location 

    setInterval(check, 1000);
}
