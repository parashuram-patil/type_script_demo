class A {
    add() {
        console.log("Add Method")
    }

    sub() {
        console.log("Sub Method")
    }
}

class B extends A {
    test() {
        this.add();
        this.sub();
    }
}

new B().test();