// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }            
            args.setPromise(WinJS.UI.processAll().done(function () {                
                FillClock();
                //setInterval(function () { myTimer() }, 1000);
                
                //setInterval(function () {
                //    var elements = WinJS.Utilities.query('.active');
                //    elements.removeClass("active");
                //    FillClock();
                //}, 60000);
                })
            );
        }
    };

    function myTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("clock").innerHTML = t;
    }

    function FillClock() {
        
            var me = Common || {};               
            var segments = me.Operations.getTimeAsStringArray();
            var x = 0;            

            for (x;x<segments.length;x++)
            {
                var clase = "."+segments[x];
                var elements = WinJS.Utilities.query(clase);
                elements.addClass("active");
            };
        }

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
