Common.Spinner = Common.Spinner || {   
    
    fillClock: function () {
        var time = new Date();
        var commonOperations = Common.Operations;

        var hour = time.getHours();
        var minutes = time.getMinutes();
        var conector;
        if (minutes <= 30) {
            conector = 0;
        }
        else {
            conector = 180;
        }
        $("#minutes").rotate({ animateTo: commonOperations.obtainMinutesAsDegrees(minutes) })
        $("#conector").rotate({ animateTo: conector })
        $("#hour").rotate({ animateTo: commonOperations.obtainHourAsDegrees(hour) })
    },

    init: function () {        
        var me = Common.Spinner || {};        
        setInterval(function () {
            me.fillClock;
        }, 1000);
    }
    
};

$(document).ready(function () {
    var me = Common.Spinner;
    me.init();

    $(document).ready(function () {
        $("#minutes").rotate({ animateTo: 300 })
        $(".activar").rotate({
            bind:
              {
                  mouseover: function () {
                      $("#minutes").rotate({ animateTo: 240 })
                      $("#conector").rotate({ animateTo: 180 })
                      $("#hour").rotate({ animateTo: 30 })
                  },
                  mouseout: function () {
                      $("#minutes").rotate({ animateTo: 0 })
                      $("#conector").rotate({ animateTo: 0 })
                      $("#hour").rotate({ animateTo: 0 })
                  }
              }
        });
    });
});