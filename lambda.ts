class Lambda {
    names = ["Nilesh", "Ramesh", "Satish", "Arya"]
    
    constructor() {
        console.log("Inside Constructor")
    }

    printNames() {
        this.names.forEach(name => {
            console.log(name);
        })
    }
}

new Lambda().printNames();