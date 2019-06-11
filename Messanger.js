"use strict";
exports.__esModule = true;
var Welcome_1 = require("./Welcome");
var Messanger = /** @class */ (function () {
    function Messanger() {
        var w = new Welcome_1.Welcome("PSP");
        console.log(w.hello());
    }
    return Messanger;
}());
