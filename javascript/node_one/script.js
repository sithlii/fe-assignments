//1
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const addNode = new Node(data);
        if (!this.head) {
            this.head = addNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = addNode;
    }

    getFirstNode() {
        return this.head ? this.head : null;
    }

    getLastNode() {
        if (!this.head) return null;
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        return last;
    }

    nukeNodes() {
        this.head = null;
    }
}


//2
//https://www.google.com/search?q=pokemon&oq=pokemon&gs_lcrp=EgZjaHJvbWUyEQgAEEUYORhDGLEDGIAEGIoFMgwIARAjGCcYgAQYigUyDAgCECMYJxiABBiKBTISCAMQABhDGIMBGLEDGIAEGIoFMgwIBBAAGEMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDAgIEAAYQxiABBiKBTIHCAkQABiPAtIBCTI1MTZqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8

const allTags = document.getElementsByTagName("*");
for (let i = 0; i < allTags.length; i++) {
    console.log(allTags[i]);
}


//3
window.onload = function() {
    const col1 = document.querySelector('.col1');
    const col2 = document.querySelector('.col2');
    const col3 = document.querySelector('.col3');

    col1.textContent = '#fcba03';
    col2.textContent = '#03fca1';
    col3.textContent = '#fc03c2';
}