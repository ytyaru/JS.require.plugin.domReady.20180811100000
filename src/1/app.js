require.config({
    paths: {
        "require": "js/lib/require/require.min",
        "require.domReady": "js/lib/require/plugin/domReady",
    }
});
// https://requirejs.org/docs/errors.html#notloaded
//requirejs(['js/app/main.js']);
//require(['require.domReady!'], function (doc, main) {
//require(['require.domReady!', 'js/app/main.js'], function (doc, main) {
//});
require(['require.domReady!', 'require'], function (doc, require) {
    const main = require("js/app/main");
    /*
    console.log(doc);
    console.log(document);
    console.log(doc.getElementById("Now"));
    console.log(document.getElementById("Now"));
    console.log(doc.getElementById("Now").TextContent);
    console.log(document.getElementById("Now").TextContent);
    console.log(doc.getElementById("Now").innerText);
    console.log(document.getElementById("Now").innerText);
    alert(doc.getElementById("Now").innerText);
    alert(document.getElementById("Now").innerText);
    */
});
