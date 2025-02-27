//1
function longestWord(words) {
    let longWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longWord.length) {
            longWord = words[i];
        }
    }
    return longWord;
}

console.log(longestWord(['a', 'b', 'cc']));

//2
function swapFirstLast(str) {
    let tempStr = str.split('');
    let first = tempStr.shift();
    let last = tempStr.pop();
    tempStr.unshift(last);
    tempStr.push(first);
    return tempStr.join('');
}

console.log(swapFirstLast('ryan'))


//3
function getSum(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

console.log(getSum([1,2,3]));


//4
function combineArray(arr1, arr2) {
    let newArray = [];

    for (let i = 0; i < arr1.length; i++) {    
        newArray.push(arr1[i], arr2[i])
    }

    return newArray;
}

console.log(combineArray([1, 2, 3], [4, 5, 6]))


//5
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


//6
function longestWordInString(text) {
    let longWord = '';
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longWord.length) {
            longWord = words[i];
        }
    }
    return longWord;
}

console.log(longestWordInString("This string has several different values"));


//7
function alphabetSort(string) {
    let temp = string.toLowerCase();
    let result = temp.split('').filter(char => char !== ' ').sort().join('');

    return result;
}

console.log(alphabetSort('Hi there'))


//8
function extractArray(array, indices) {
    let result = [];

    for (let i = 0; i < indices.length; i++) {
        let index = indices[i];
        result.push(array[index]);
    }

    return result;
}

console.log(extractArray(['a','b','c','d'], [1,3]))


//9
const user = {
    userName: '',
    activeStatus: 'away',
}

const login = (user) => {
    user.activeStatus = 'active';
    return `'${user.userName} is ${user.activeStatus}'`;
}

user.userName = 'isaacgartz';
console.log(login(user));


//10
function power(base, exponent) {
    let result = base ** exponent;

    return result;
}

console.log(power(4,2))