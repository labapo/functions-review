/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2){
    return num1
  } else if (num1 === num2) {
    console.log("Both numbers are equal")
  } else {
    return num2
  }
};

console.log(maxOfTwoNumbers(12, 7));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
  if (num1>=num2 && num1>=num3) {
    return num1
  } else if (num2>=num1 && num2>=num3) {
    return num2
  } else if (num3>=num1 && num3>=num2){
    return num3
  }
};
 console.log(maxOfThree(4, 15, 12))

//  Ying's Method
//  maxOfThree = (num1, num2, num3) => {
//   const array= [num1, num2, num3];
//   array.sort(function(a, b){return a-b});
//   console.log(array[2]) 
// };

//maxOfThree(10,8,4);
/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
  if (char === "a"|| 
  char === "e"|| 
  char === "i"|| 
  char === "o"|| 
  char === "u"|| 
  char === "A"||
  char === "E"|| 
  char === "I"||
  char === "O"||
  char === "U") {
    return true
  } else {
    return false
  }
};
console.log(isCharacterAVowel("t"))

//more efficient way 
// isCharacterAVowel = (char) => {
//   let char = char.toLowerCase
//   if (char === "a"|| 
//   char === "e"|| 
//   char === "i"|| 
//   char === "o"|| 
//   char === "u"||) 
//   {
//     return true
//   } else {
//     return false
//   }
// };
// console.log(isCharacterAVowel("t"))

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
let someNumbers = [1, 2, 3, 4]

sumArray = (arr) => {
  let sum = 0
  for (let i = 0; i< arr.length; i++){
    sum += arr[i];
  } return sum;
};

console.log(sumArray(someNumbers));
//can try reduce
multiplyArray = (arr) => {
  let productArray = 1;
  for (i = 1; i<arr.length; i++) {
    productArray = productArray* arr[i]
  }return productArray;
}

console.log(multiplyArray(someNumbers))

//COME BACK AND TRY THE REDUCE CODE 
/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

numArgs = (...arguments) => {
  return arguments.length
};

console.log(numArgs(12, 14, 3, "string"))


/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
let randomString = "jag testar"
reverseString = (str) => {
  //convert to a string
  let reversedString = ""; 
  //i=the length of the string (minus one needs to be explained)
  //i is decreased by one 
  //stop when i=0, decrease by one 
  for (let i=str.length -1; i>=0; i--){
    //take the reverse string and add it to an array. Add and instatiate
    reversedString += str[i]
  } return reversedString
};
console.log(reverseString(randomString));

//const reverse strong = (str) => {
//  return str.split('').reverse().join(""))
//}

/*
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// */
// findLongestWord = (arr) => {
// //   initiate variable to HOLD longest length word
//   let longestWord = "";
// //  create For loop
//   for (let i = 0; i < arr.length; i++){
// //   checks if the length of the array is longer than the longest word
//     if (arr[i].length > longestWord.length){
//       longestWord = arr[i]
//     } 
//   }return longestWord
// };

let someWords = ["cookie", "mathematics", "dog", "onomatopoeia"]

// console.log(findLongestWord(someWords))

findLongestWord = (arr) => {
  const longestWord = arr.sort((a, b) => b.length - a.length)
  console.log(longestWord);
  return longestWord[0];
}
console.log(findLongestWord(someWords))


/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/

let someLongWords = ["green", "dog", "robot", "because", "appreciate", "four"]
filterLongWords = (arr, i) => {
  let wordsToFilter = arr.filter(words => words.length >=i);
  console.log(wordsToFilter)
};
filterLongWords(someLongWords, 5)


/*Self Evaluation

Persistence: Do you handle frustration well? Yes and no. I feel like I try to push on instead of taking breaks
Do you independently pursue understanding? Yes! I google a lot so I can see different methods. 
Organization: Do you thoughtfully implement best coding patterns and practices? Not really. I need a system of doing this
Collaboration: Do you make an effort solve problems and share your ideas with others? Yes
Communication: Do you clearly convey your thoughts to others in illustrative and clear ways? I hope so, but I'm not sure what you mean exactly with this question
Self-compassion: Do you make productive use of turning failures into learning opportunities? yes
Resourcefulness: Do make an effort to compare and contrast new ideas with ones you already know? 
Yes! I try to one up on my code all the time to be more efficient and less lines. 
*/
