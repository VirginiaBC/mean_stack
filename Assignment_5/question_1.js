function foo() {
    let counter = 0;
    const printMsg = () => {
        if (counter < 5) {
            console.log("Congrats you earn the chance!");
        } else {
            console.log("Sorry you missed the chance");
        }
        counter++;
    };
    return printMsg;
}

const congratulate = foo();
congratulate()
congratulate()
congratulate()
congratulate()
congratulate()
congratulate()
congratulate()
congratulate()