//1
const studentInfo = {
    id: 26707,
    name: "Isaac",
    age: 27,
    dob: "Sep. 15, 1997",
    grades_completed: ["K-12", "College Junior"],
    current_course_grades: {
        math: "A",
        english: "A",
        science: "B",
    },
    delete_me: "Test",
}

console.log(studentInfo["name"] + " " + studentInfo["id"] + " has been through " + studentInfo["grades_completed"][0]);
console.log(studentInfo)
delete studentInfo["delete_me"]
console.log(studentInfo)


//2
const user = {
    firstName: "Isaac",
    lastName: "Gartz",
    city: "Provo",
    semesters: {
        semesterOne: "incomplete",
        semesterTwo: "incomplete",
        semesterThree: "incomplete",
        semesterFour: "incomplete"
    }
}

user.semesters["semesterOne"] = "complete";
user.semesters["semesterTwo"] = "in progress";
delete user.semesters["semesterFour"];
user["favoriteLanguage"] = "SCSS";
console.log(user)


//3
const arrayOne = [1,2,3,4,5];

function shiftPop(array) {
    let result = [];
    let removeFront = true;

    while (array.length > 0) {
        if (removeFront) {
            result.push(array.shift());
        } else {
            result.push(array.pop());
        }
        removeFront = !removeFront;
    }

    return result;
}

const newArray = shiftPop(arrayOne)
console.log(newArray);