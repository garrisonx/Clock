/*
Gets an HTML DOM element
*/
function id(elementId) {
    return document.getElementById(elementId);
}

/*
Gets a WinJS control
*/
function getWinJSControl(elementId) {
    var elementById = id(elementId);
    if (!(elementById == null || elementById == undefined)) {
        return WinJS.UI.getControl(id(elementId));
    }
    return null;
}

/*
Prepends a "0" if the value is less than 10. So "9" gets converted to "09".
*/
function PrependZeroIfNeeded(value) {
    if (parseInt(value, 10) < 10) {
        return "0" + value;
    }
    return value;
}