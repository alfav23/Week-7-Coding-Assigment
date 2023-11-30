// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//      a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//         *Do not use numbers to reference the last element, find it programmatically.
//         *ages[7] - ages[0] is not allowed!
//      b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//      c. Use a loop to iterate through the array and calculate the average age.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`Ages: `, ages);

let minusAge = ages[ages.length - 1] - ages [0];
console.log(`Last age minus first age: `, minusAge);

ages.push(12);
console.log(`New Ages: `, ages);
let newMinusAge = ages[ages.length-1] - ages[0];
console.log (`Last age minus first age: `, newMinusAge);

let sumOfAges = 0;
for (let i =0; i < ages.length; i++) {
    sumOfAges += ages[i];
}
let average = sumOfAges / ages.length;
console.log(`Average of ages: `, average);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//      a. Use a loop to iterate through the array and calculate the average number of letters per name.
//      b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for (let i = 0; i < names.length; i++) {
    totalChars += names[i].length;
    console.log(i, names[i], totalChars);
}

let averageChars = totalChars / names.length; 
console.log(averageChars);

let concatNames = "";
for (let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i] + " ");
    console.log(concatNames);
}

// 3. How do you access the last element of any array?
let last = names [names.length - 1];
console.log(`This is the last name in the names array:`, last);

// 4. How do you access the first element of any array?
let first = names[0];
console.log(`This is the first element in the names array:`, first);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for( let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(`Lengths of names array: `, nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfLengths+=nameLengths[i];
}
console.log(sumOfLengths);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWords(word, n) {
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello", 3);

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName (firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(`My full name is:`, fullName);
}
fullName("Alyssa", "Favorito");

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];
function sumNumbersArray(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    if (total > 100) {
        console.log(total, true)
        return true
    } else {
        console.log(total, false)
        return false
    }
}
sumNumbersArray(numbers1);
sumNumbersArray(numbers2);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageOfArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
        average = sum / array.length;
    }
    console.log(average);
}
averageOfArray(numbers1);
averageOfArray(numbers2);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2) {
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;  
    }

    for (const number of array2) {
        total2 += number;
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2. length;
    if (average1 > average2) {
        console.log("True");
        return true;
    } 
    else if (average1 < average2) {
        console.log("False");
        return false
    } else {
        console.log("Equal average.");
    }
}
twoAverages(numbers3, numbers4);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    let buyDrink = isHotOutside === true && moneyInPocket >= 3;
    if (buyDrink === true) {
        buyDrink = "Yes";
    }
    console.log("Can I buy a drink?", buyDrink)
    return buyDrink;
}
willBuyDrink(true, 3);