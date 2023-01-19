// Task 1
let names = function (...names) {
    return `String ${names.join("||")} => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim")); // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// using arrow function

let secondNames = (...names) => `String ${names.join("||")} => Done !`;

console.log(secondNames("Osama", "Mohamed", "Ali", "Ibrahim"));


/* ==================================================================================================================================== */



// Task 2
// frist way
let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one+two+nums[+false];

console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80

// ***************************************************************************************
// second way
let myNumber = [20, 50, 10, 60];

let cal = (one, two, ...nums) => (one%1)+two+nums[+false];

console.log(cal(10, myNumbers[+false], myNumber[myNumber.length-true])); // 80

// ****************************************************************************************
// regular function
function calculate(one, two, ...nums){
    return  one+two+nums[+false];
}
console.log(calculate(10, myNumbers[+false], myNumbers[+true])); // 80



