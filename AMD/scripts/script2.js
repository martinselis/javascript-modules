define([], function() {
    function textAppend() {
        var pTag = document.querySelector(".js");
        pTag.textContent = "I appear through Javascript";
    }

    return {
        textAppend: textAppend
    }
})