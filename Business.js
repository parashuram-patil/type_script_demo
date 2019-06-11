var BusinessImpl = /** @class */ (function () {
    function BusinessImpl() {
    }
    BusinessImpl.prototype.add = function () {
        return 100;
    };
    ;
    BusinessImpl.prototype.sub = function () {
        return 200;
    };
    ;
    BusinessImpl.prototype.div = function () {
        return 300;
    };
    ;
    return BusinessImpl;
}());
var b = new BusinessImpl();
console.log(b.add(), b.sub(), b.div());
