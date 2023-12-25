// The below programs in the anonymous function & IIFE .

// a.print odd numbers in the array by using anonymous function.

// let numbers =[1,2,3,4,5,6,7,8,9,10];                                   

//        let Odd = function(){                                  
//        let oddNumbers =[];                                               // Declare the array inside the function.
//     for (let i=0;i<numbers.length;i++){                                  // Iteration.    
//     if( numbers[i]%2! == 0) {                                            // If it gets a reminder means the element is pushed to the new array. 
//        oddNumbers.push(numbers[i]);
//     }
//    }
//    return oddNumbers;                                                    // It return the new array.
//   }
// console.log(Odd());                                                      // calling the function.



// b.convert all the strings to title caps in a string array by using anonymous function.


// let stringWords =["apple","banana","cherry","date","starberry"];

// let titleCaps = function(){
//   let titleCapsWords = [];                                                                  // Declare the array inside the function.
//   for (let j=0;j<stringWords.length;j++) {                                                  // Iteration. 
//   let titleStringWords = stringWords[j].charAt(0).toUpperCase()+stringWords[j].slice(1);    
//   titleCapsWords.push(titleStringWords);
// }
// return titleCapsWords;                                                                      // It will return the new array
// }

// console.log(titleCaps());                                                                   // calling the function.



//c.sum of all numbers in the array by using anonymous function.

// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = function () {
//   let result = 0;                                                                          // Declaring the initial value.
//   for (let i = 0; i < numbersArray.length; i++) {                                          // Iteration.
//     result += numbersArray[i];                                                             // Adding sum of all values.
//   }
//   return result;                                                                           // It will return the single value of Total sum.  
// };

// console.log(sum());                                                                        //calling the function.



//d. Return all the prime numbers in an array by using anonymous function.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  let primeNumbers = numbers.filter(function (num) {                                        //Iteration
//   for (let i = 2; i < num; i++) {                                                          
//     if (num % i === 0) {                                                                  
//       return false;
//     }
//   }
//   return num > 1;
// });

// console.log(primeNumbers);                                                              // calling the function.




// e. Return all the palindromes in an array by using anonymous function.

// let words = ["level", "hello", "deed", "world", "radar", "civic","malayalam"];          // Declaring an array

// let isPalindrome = function (word) {                                                   // passing an arguments.
//   let reversed = word.split("").reverse().join("");                                    // Reversing the element
//   return word === reversed;                                                            // comparing the reverse elements with words element. 
// };

// let palindromeWords = words.filter(isPalindrome);

// console.log(palindromeWords);                                                          // calling the function.



// f. Return median of two sorted arrays of the same size by using anonymous function.

// let nums1 =[1,5,6,7];                                                                 //Declaring the array of same size.
// let nums2 =[2,3,4,8];

// let medianTwoSortedArray = function (nums1,nums2){

//   let arr = nums1.concat(nums2);                                                      // merging of two array with same size.
//   arr.sort((a,b)=>(a-b));                                                             // Makeing the array in the ascending order.
//   let n = arr.length;

//   if(n%2 === 0){
//     return ((arr[n/2]+arr[n/2-1])/2);                                                 //  A two numbers is added and divided by two.
//     }                                                                                 // It will returns an Median 
//  
// };
// console.log(medianTwoSortedArray(nums1,nums2));                                       // calling a function and passing arguments.



//g. Remove duplicates from an array by using anonymous function.

//  let arr =[1,2,3,4,5,5,4,3,2,1,1];                                                    // Declaring an  array.

//  let removeDuplicates = function (arr) {
//  let result = [];                                                                    // Declare the array inside the function.
//  for(let i=0; i<arr.length;i++){                                                     // Iteration
//   if(result.length === 0){                                                           // Pushing an first element in an array if an array is empty.
//     result.push(arr[i]); 
//   }
//   if(result.indexOf(arr[i]) === -1){                                                // If an element is present in an array it will returns a value -1 or push the element to the new array.
//     result.push(arr[i]);
//   }
// }
//  return result;                                                                    // It will return the new array.
// }
// console.log(removeDuplicates(arr));                                                // calling the function and passing arguments.



//h. Rotate an array by k times by using anonymous function.

// let nums = [1,2,3,4,5,6,7];                                                       // Declaring an array.

// let k = 5;                                                                        // Declaring an number to rotate.

// let rotate = function (nums,k) {
//   if(k === nums.length){                                                         // If  k is same length it returns the same array
//     return nums;
//   }
//   else if( k > nums.length ){                                                   // If  k is greater than array 
//     k = k % nums.length;                                                        
//   }

//   for(let i = 0; i<k; i++){                                                     // Iteration
//     nums.unshift(nums.pop());                                                   //Removes the last element from the array and adding it to the first element.
//   }
//   return nums;                                                                  // It will return the new array 

// }
// console.log(rotate(nums,k));                                                   // calling the function and passing the arguments.



// // a. print odd numbers in the array by using IIFE function.
    
//    (function (numbers){ 
//        let oddNumbers =[];                                                  // Declare the array inside the function.
//     for (let i=0;i<numbers.length;i++){                                     // Iteration. 
//      if(numbers[i]%2!==0){                                                  // If it gets a reminder means the element is pushed to the new array.
//        oddNumbers.push(numbers[i]);
//     }
//    }
//    console.log(oddNumbers);                                                
//   })([11,12,13,14,15,16,17,18,19,20]);



// b.convert all the strings to title caps in a string array by using IIFE function.


// (function(stringWords){
//   let titleCapsWords = [];                                                   // Declare the array inside the function.
//   for (let j=0;j<stringWords.length;j++) {                                   // Iteration.        
//   let titleStringWords = stringWords[j].charAt(0).toUpperCase()+stringWords[j].slice(1);
//   titleCapsWords.push(titleStringWords);
// }
// console.log(titleCapsWords);                                                 // It will returns the new array
// })(["apple","banana","cherry","date","starberry"]);



//c.sum of all numbers in the array by using IIFE function.

//  (function (numbersArray) {
//   let result = 0;                                                            // Declaring the initial value.
//   for (let i = 0; i < numbersArray.length; i++) {                            // Iteration.
//     result += numbersArray[i];                                               // Adding sum of all values
//   }
//   console.log (result);                                                      // It will returns the new array.
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);




//d. Return all the prime numbers in an array by using IIFE function.
  // IIFE function.

  // (function (numArray)  {
  //   numArray = numArray.filter((number)=> {                                                 
  //     if(number < 2){
  //       return false;
  //     }
  //     for(let i = 2; i<=Math.sqrt(number); i++) {                                          //Iteration
  //       if(number % i === 0)
  //        return false;
  //     }
  //     return true;
  //   });
  //   console.log(numArray);                                                              
  // })([1,2,3,4,5,6,7,8,9,10,11,13])                                                        //passing the array of elements.


// e. Return all the palindromes in an array by using IIFE function.

// const words = ["level", "hello", "deed", "world", "radar", "civic","malayalam"];          // Declaring an array.

// const palindromeWords = (function () {
//   const isPalindrome = (word) => {
//     const reversed = word.split("").reverse().join("");                                  
//     return word === reversed;                                                              // comparing the reverse elements with words element.
//   };

//   return words.filter(isPalindrome);
// })();

// console.log( palindromeWords);


// f. Return median of two sorted arrays of the same size by using IIFE function.

  // (function (nums1,nums2){
  
  // let arr = nums1.concat(nums2);                                           // merging of two array with same size.
  // arr.sort((a,b)=>(a-b));                                                  // Makeing the array in the ascending order.
  // let n = arr.length;

  // if(n%2 === 0){
  //   console.log((arr[n/2]+arr[n/2-1])/2);                                  //  A two numbers is added and divided by two.
  //   }                                                                      // It will returns an Median
    
  // })([1,5,6,7],[2,3,4,8]);



  //g. Remove duplicates from an array by using IIFE function.

  // (function (arr) {
  // let result = [];                                                         // Declare the array inside the function.
  // for(let i=0; i<arr.length;i++){                                          // Iteration
  //  if(result.length === 0){                                                // Pushing an first element in an array if an array is empty.
  //   result.push(arr[i]); 
  //  }
  //  if(result.indexOf(arr[i]) === -1){                                       // If an element is present in an array it will returns a value -1 or push the element to the new array.
  //   result.push(arr[i]);
  //  }
  // }
  //  console.log (result);                                                    // It will return the new array.
  // })([1,2,3,4,5,5,4,3,2,1,1]);

  
  //h. Rotate an array by k times by using IIFE function.

        
  //  let rotate = (function (nums,k) {
  //   if(k === nums.length){                                                   // If  k is same length it returns the same array.
  //     return nums;
  //   }
  //   else if( k > nums.length ){                                              // If  k is greater than array
  //     k = k % nums.length;
  //   }

  //   for(let i = 0; i<k; i++){                                                // Iteration.
  //     nums.unshift(nums.pop());                                              //Removes the last element from the array and adding it to the first element.
  //   }
  //   return nums;                                                            // It will return the new array. 
  // })([1,2,3,4,5,6,7],5);                                                    // Passing an argument to the function.

  // console.log(rotate);


    //   2. The below programs in arrow functions.

    // a. print the odd numbers in an array by using arrow function.
      
   //   let odd = (numbers) => {
   //      let oddNumbers=[];                                               // Declare the array inside the function.
   //      for (let i=0;i<numbers.length;i++){                              // Iteration. 
   //              if(numbers[i]%2!==0){                                    // If it gets a reminder means the element is pushed to the new array.
   //                 oddNumbers.push(numbers[i]);
   //              }
   //             }
   //            return oddNumbers;                                          // It return the new array.
   // }

   //    console.log(odd([51,52,53,54,55,56,57,58,59,60]));

  
   // b.convert all the strings to title caps in a string array by using arrow function.

    //   let titleCaps =(stringWords)=>{
    //    let titleCapsWords = [];                                                                // Declare the array inside the function.
    //    for (let j=0;j<stringWords.length;j++) {                                                // Iteration. 
    //    let titleStringWords = stringWords[j].charAt(0).toUpperCase()+stringWords[j].slice(1);
    //    titleCapsWords.push(titleStringWords);                                                  
    // }
    //   return titleCapsWords;                                                                    // It return the new array.
    // }

    // console.log(titleCaps(["apple","banana","cherry","date","starberry"]));


    //c.sum of all numbers in the array by using arrow function.

    //  let sum = (numbersArray) => {
    //    let result = 0;                                                                          // Declaring the initial value.
    //    for (let i = 0; i < numbersArray.length; i++) {                                          // Iteration. 
    //      result += numbersArray[i];                                                             // Adding sum of all values.
    //    }                                                                                        
    //    return result;                                                                            // It will return the single value of Total sum.
    //  };

    //  console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));                                          // It will call the function and passing argument.



    //d) Return all the prime numbers in an array by using arrow function.
  
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // let isPrime = (num) => {                                                                        
    //   if (num <= 1) {                                                                              // If nunber 1 is less than or equal to one it is not a prime number.
    //     return false;
    //   }
    //   for (let i = 2; i < num; i++) {                                                              //Iteration.
    //     if (num % i === 0) {
    //       return false;
    //     }
    //   }
    //   return true;
    // };

    // let primeNumbers = numbers.filter(isPrime);

    // console.log(primeNumbers);                                                                  // calling the function.

    
    // e) Return all the palindromes in an array by using arrow function.

    // let words = ["level", "hello", "deed", "world", "radar", "civic","malayalam"];               // Declaring an array.

    //   let isPalindrome = (word) => {
    //   let reversed = word.split("").reverse().join("");
    //   return word === reversed;                                                                 // comparing the reverse elements with words element.
    // };

    // let palindromeWords = words.filter(isPalindrome);

    // console.log(palindromeWords);

