function grade(number) {
    if (number >= 80) {
        console.log("A+");
    }
    else if (number >= 70) {
        console.log("A");
    }
    else if (number >= 60) {
        console.log("A-");
    }
    else if (number >= 50) {
        console.log("B");
    }
    else {
        console.log("Fail");
    }
}

let gradeNumber = grade(40);