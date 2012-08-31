var Common = Common || {

    Operations: {
        getTimeAsStringArray :function() {
            var segments = new Array();
            var time = new Date();

            var hour = time.getHours();
            var minutes = time.getMinutes();

            segments.push("it");
            segments.push("is");

            if (minutes >= 0 && minutes <=5) {
                segments.push(this.returnHourAsString(hour));
                segments.push("o");
                segments.push("clock");
            }
            if (minutes > 5 && minutes < 10) {
                segments.push(this.returnMinutesAsString(5));
                segments.push("past");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 10 && minutes < 15) {
                segments.push(this.returnMinutesAsString(10));
                segments.push("past");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 15 && minutes < 20) {
                segments.push(this.returnMinutesAsString(15));
                segments.push("past");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 20 && minutes < 25) {
                segments.push(this.returnMinutesAsString(20));
                segments.push("past");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 25 && minutes < 30) {
                segments.push(this.returnMinutesAsString(25));
                segments.push("past");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 30 && minutes < 35) {
                segments.push(this.returnMinutesAsString(30));
                segments.push("past");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 35 && minutes < 40) {
                segments.push(this.returnMinutesAsString(35));
                segments.push("to");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 40 && minutes < 45) {
                segments.push(this.returnMinutesAsString(40));
                segments.push("to");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 45 && minutes < 50) {
                segments.push(this.returnMinutesAsString(45));
                segments.push("to");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 50 && minutes < 55) {
                segments.push(this.returnMinutesAsString(50));
                segments.push("to");
                segments.push(this.returnHourAsString(hour));
            }
            if (minutes >= 55 && minutes < 59) {
                segments.push(this.returnMinutesAsString(55));
                segments.push("to");
                segments.push(this.returnHourAsString(hour));
            }

            return segments;
        },

        returnHourAsString : function(hour) {
            switch (hour) {
                case 13:
                case 1:
                    return "one";

                case 14:
                case 2:
                    return "two";
                case 15:
                case 3:
                    return "three";
                case 16:
                case 4:
                    return "four";
                case 17:
                case 5:
                    return "five";
                case 18:
                case 6:
                    return "six";
                case 19:
                case 7:
                    return "seven";
                case 20:
                case 8:
                    return "eight";
                case 21:
                case 9:
                    return "nine";
                case 22:
                case 10:
                    return "ten";
                case 23:
                case 11:
                    return "eleven";
                case 24:
                case 12:
                    return "twelve";
            }
        },

        returnMinutesAsString : function(minutes) {
            switch (minutes) {
                case 5:
                    return "five-minute";
                case 10:
                    return "ten-minute";
                case 15:
                    return "quarter";
                case 20:
                    return "twenty";
                case 25:
                    return "twentyfive";
                case 30:
                    return "half";
                case 35:
                    return "twentyfive";
                case 40:
                    return "twenty";
                case 45:
                    return "quarter";
                case 50:
                    return "ten-minute";
                case 55:
                    return "five-minute";
            }
        },

        obtainHourAsDegrees: function (hour) {
            switch (hour) {
                case 1:
                case 13:
                    return 30;
                case 2:
                case 14:
                    return 60;
                case 3:
                case 15:
                    return 90;
                case 4:
                case 16:
                    return 120;
                case 5:
                case 17:
                    return 150;
                case 6:
                case 18:
                    return 180;
                case 7:
                case 19:
                    return 210;
                case 8:
                case 20:
                    return 240;
                case 9:
                case 21:
                    return 270;
                case 10:
                case 22:
                    return 300;
                case 11:
                case 23:
                    return 330;
                case 12:
                case 24:
                    return 360;
            }

        },

        obtainMinutesAsDegrees: function (minutes) {
            switch (minutes) {
                case 0:
                    return 0;
                case 5:
                case 55:
                    return 30;
                case 10:
                case 50:
                    return 60;
                case 15:
                case 45:
                    return 90;
                case 20:
                case 40:
                    return 120;
                case 25:
                case 35:
                    return 150;
                case 30:                
                    return 180;                                
            }
        },

        fillClock: function () {
            var me = Common || {};
            var segments = me.Operations.getTimeAsStringArray();
            setInterval(function () {
                var elements = $('.active');
                $(elements).removeClass("active");
                $.each(segments, function (key, value) {
                    var clase = "." + value;
                    var elements = $(clase);
                    elements.addClass("active");
                });
            }, 1000);
        }
    }
};

$(document).ready(function () {
    var me = Common;
    me.Operations.fillClock();
});
