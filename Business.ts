interface IBussiness {
    add(): Number;
    sub(): Number;
    div(): Number;
}

class BusinessImpl implements IBussiness {

    add(): Number {
        return 100;
    };

    sub(): Number {
        return 200;
    };

    div(): Number{
        return 300;
    };
}

let b = new BusinessImpl();
console.log(b.add(), b.sub(), b.div());