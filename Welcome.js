"use strict";
exports.__esModule = true;
var Welcome = /** @class */ (function () {
    function Welcome(name) {
        this.name = name;
        this.a = "10";
        this.b = 10;
        this.c = true;
        this.d = "public var d";
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
    /*constructor(public name: String) {
    }*/
    Welcome.prototype.hello = function () {
        return "HelloWorld";
    };
    // Default shoud always after non defaults
    Welcome.prototype.anotherHello = function (a, b, c, d, e) {
        if (e === void 0) { e = 0; }
        console.log("From anotherHello() ---> " + typeof (d));
        console.log(a, b, c, d, e);
    };
    return Welcome;
}());
var w = new Welcome("PSP");
console.log(w.name);
console.log(w.d);
w.hello();
w.anotherHello("PSP", 11, true, "Patil");
w.anotherHello("PSP", 11, true, 1, 2);
var w1 = new Welcome("XYZ");
console.log(w1.name);
var Test1 = /** @class */ (function () {
    function Test1() {
    }
    return Test1;
}());
exports.Test1 = Test1;
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    return Test2;
}());
exports.Test2 = Test2;
var Test3 = /** @class */ (function () {
    function Test3() {
    }
    return Test3;
}());
exports.Test3 = Test3;
var Test4 = /** @class */ (function () {
    function Test4() {
    }
    return Test4;
}());
exports["default"] = Welcome;
