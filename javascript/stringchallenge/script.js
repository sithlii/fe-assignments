//1
let isString = 'Isaac';

if (typeof isString === 'string') {
    console.log("true")
} else {
    console.log("false")
};


//2
let isBlankString = ' ';

if (isBlankString.trim() === '') {
    console.log("true")
} else {
    console.log("false")
};


//3
let capitalizeFirst = 'abcdef';
console.log(capitalizeFirst[0].toUpperCase() + capitalizeFirst.slice(1))


//4
let fullName = "Isaac Gartz";
let name = fullName.split(' ');
let firstName = name[0];
let lastName = name[1];

console.log(`${firstName} ${lastName.charAt(0)}.`)


//5
let sentence = "I am a long sentence";
let sentenceEnd = 6;
let test = sentence.slice(0, sentenceEnd);
console.log(test + "...")


//6
const str = "The practitioners grappled on the road side!";
let newStr = str.slice(18)
console.log(newStr)