function interest(principle, rateOfInterest, periodOfTime) {
    let interest = (principle * rateOfInterest * periodOfTime) / 100;
    return interest;
}

let principle = 5000;
let rate = 5;
let year = 5;

let getInterest = interest(principle, rate, year);
console.log("Interest", getInterest);
let total = getInterest + principle;
console.log("Total Money: ", total);