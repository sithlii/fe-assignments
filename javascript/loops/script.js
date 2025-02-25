//1
let numArray = [1,2,3,4,5,6,7,8,9,10];
let byTwo = [];
for (let num in numArray) {
    ++num;
    if (num % 2 == 0) {
        byTwo.push(num);
    }
}
console.log(byTwo)


//2
let randomArray = ['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'];

function removeByIndex(randArray, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let index = array[i]
        result.push(randArray[index]);
    }
    return result;
}

console.log(removeByIndex(randomArray, [1, 5]))


//3
function numToArray(num) {
    let result = [];
    let str = String(num);
    let numStr = str.split('');
    for (let i = 0; i < numStr.length; i++) {
        result.push(Number(numStr[i]));
    }
    return result;
}

console.log(numToArray(12345));


//4
function beegArray(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
            result.push([arr2[j], arr1[i]]);
        }
    }

    return result;
}

let arrayOne = [1,2,3];
let arrayTwo = ["a", "b", "c", "d"];

console.log(beegArray(arrayOne, arrayTwo))