var Welcome = /** @class */ (function () {
    function Welcome(name) {
        if (name === void 0) { name = "PSP"; }
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
var w = new Welcome();
console.log(w.name);
console.log(w.d);
w.hello();
w.anotherHello("PSP", 11, true, "Patil");
w.anotherHello("PSP", 11, true, 1, 2);
var w1 = new Welcome("XYZ");
console.log(w1.name);
