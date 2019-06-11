var Lambda = /** @class */ (function () {
    function Lambda() {
        this.names = ["Nilesh", "Ramesh", "Satish", "Arya"];
        console.log("Inside Constructor");
    }
    Lambda.prototype.printNames = function () {
        this.names.forEach(function (name) {
            console.log(name);
        });
    };
    return Lambda;
}());
new Lambda().printNames();
