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
                case 1:
                    return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4:
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return "six";
                case 7:
                    return "seven";
                case 8:
                    return "eight";
                case 9:
                    return "nine";
                case 10:
                    return "ten";
                case 11:
                    return "eleven";
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
                    return "fifteen";
                case 50:
                    return "ten-minute";
                case 55:
                    return "five-minute";
            }
        }
    }
};
