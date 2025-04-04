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
            removeItem = this.items[this.items.length - 1];
            this.items = this.items.slice(0, -1);
        } else {
            removeItem = this.items[0];
            this.items = this.items.slice(1);
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