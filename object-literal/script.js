var scriptModule = {
    textToDisplay: "I appear through Javascript",
    textAppend: function(domElement) {
        domElement.textContent = this.textToDisplay;
    }
}

var paragraph = document.querySelector(".js").nativeElement;
scriptModule.textAppend(paragraph);