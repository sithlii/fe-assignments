//1
const basicId = {
    id: 1,
    name: "Ryan"
}

const basicInfo = {
    address: "123 Fake St.",
    phone: "555-555-5555"
}

const combinedUser = {...basicId, ...basicInfo};

console.log(combinedUser)


//2
function largestNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num1 < num2 ? num2 : num1;
    }
}

console.log(largestNum(9,12))


//3
function titleCase(string) {
    let words = string.split(" ");

    let newString = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word;
        }
    });
    return newString.join(" ")
}

console.log(titleCase("I am a sentence"))


//4
function alphabetString(string) {
    string = string.replace(' ','').toLowerCase();

    let chars = string.split('')

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < chars.length - i - 1; j++) {
            if (chars[j] > chars[j+1]) {
                let temp = chars[j];
                chars[j] = chars[j+1];
                chars[j+1] = temp;
            }
        }
    };
    return chars.join('');
}
console.log(alphabetString("Hi there"))