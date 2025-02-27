class Array {
    constructor(items = []) {
        this.items = items;
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Array is empty");
            return;
        }

        let removeItem = 0;
        if (this.items.length % 2 === 0) {
            removeItem = this.items.pop();
        } else {
            removeItem = this.items.shift();
        }

        console.log(removeItem);
    }
}

test = new Array([1,2,3,4,5]);

test.pop();
test.pop();
test.pop();
test.pop();
test.pop();
test.pop();