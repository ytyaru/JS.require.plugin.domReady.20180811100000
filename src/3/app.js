require.config({
    paths: {
        "require.domReady": "js/lib/require/plugin/domReady",
    }
});
require(['require.domReady'], function(domReady) {
    domReady(function () {
        requirejs(['js/app/main.js']);
    });
});
