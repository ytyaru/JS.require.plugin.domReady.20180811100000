require(['require.domReady!'], function (doc) {
    console.log(doc);
    console.log(document);
//    alert(doc.getElementById("Now").TextContent);
    console.log(document.getElementById("Now"));
    console.log(document.getElementById("Now").innerText);
    alert(document.getElementById("Now").innerText);
});
/*
require(['domReady'], function (domReady) {
  domReady(function () {
  });
});
*/
