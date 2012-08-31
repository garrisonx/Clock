(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("default.html", {
        ready: function (element, options) {            
            document.getElementById("cmdChangeView")
                .addEventListener("click", doClickChangeView, false);
            document.getElementById("cmdSettings")
                .addEventListener("click", doClickSettings, false);
            WinJS.log && WinJS.log("To show the bar, swipe up from " +
                "the bottom of the screen, right-click, or " +
                "press Windows Logo + z. To dismiss the bar, " +
                "tap in the application, swipe, right-click, " +
                "or press Windows Logo + z again.", "sample", "status");
        },
    });

    // Command button functions
    function doClickAdd() {
        WinJS.log && WinJS.log("Add button pressed");
    }

    function doClickRemove() {
        WinJS.log && WinJS.log("Remove button pressed");
    }

    function doClickChangeView() {
        window.location("html/spinner.html");
    }

    function doClickSettings() {
        WinJS.log && WinJS.log("Settings button pressed");
    }

    WinJS.log = function (message) {
        var statusDiv = document.getElementById("statusMessage");
        if (statusDiv) {
            statusDiv.innerText = message;
        }
    };
})();
