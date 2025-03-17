//1
function makeHeading(size, text) {
    if (size < 1 || size > 6) {
        console.error("Heading size too big. Use a number between 1 and 6, please.");
        return null;
    }
    const heading = document.createElement(`h${size}`);
    heading.textContent = text;
    return heading;
}

function render(element, parSelector) {
    const parent = document.querySelector(parSelector);
    if (parent && element) {
        parent.appendChild(element);
    } else {
        console.error("Oopsie. Invalid parent selector or element.");
    }
}

const newHeading = makeHeading(3, "Hello, world");
render(newHeading, "body");


//2
function toggleMenu() {
    document.querySelector('.nav-center').classList.toggle('active');
    document.querySelector('.nav-right').classList.toggle('active');
}