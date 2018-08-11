define(function(require, exports, module) {
    return class Shower {
        Show() {
            console.log(document);
            console.log(document.getElementById("Now"));
            console.log(document.getElementById("Now").innerText);
            alert(document.getElementById("Now").innerText);
        }
    }
});
