var scriptModule = (function () {
    var textToDisplay = "I appear through Javascript";

    function textAppend() {
        var paragraph = document.querySelector(".js");
        paragraph.textContent = textToDisplay;
    }

    return {
        textAppend: textAppend
    }
})()
