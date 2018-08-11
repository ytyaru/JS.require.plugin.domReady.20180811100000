define(function(require, exports, module) {
    window.onload = function(){
        const Shower = require("js/app/Shower");
        const s = new Shower();
        s.Show();
    };
});
