function leapYear(year) {
    if ((year % 4 == 0) || (year % 400 == 0) && (year % 100 != 0)) {
        console.log("It's a leap year");
    }
    else {
        console.log("not a leap year");
    }
}

let leap_year = leapYear(2020);