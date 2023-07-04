/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} str - The string to be checked.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 */
function check_if_palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
/**
 * Check if there are two numbers in the input array that add up to the target number.
 *
 * @param {Array} array - The input array of numbers.
 * @param {number} target - The target number to check for.
 * @return {boolean} Returns true if there are two numbers that add up to the target, otherwise false.
 */
function check_for_target(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] == target) {
      return true;
    } else if (array[left] + array[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

/**
 * Combines two sorted arrays into a single sorted array.
 *
 * @param {Array} arr1 - The first sorted array to be combined.
 * @param {Array} arr2 - The second sorted array to be combined.
 * @return {Array} The combined and sorted array.
 */
function combine(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

/**
 * Checks if a subsequence is present in a given string.
 *
 * @param {string} subStr - The subsequence to search for.
 * @param {string} string - The string to search in.
 * @return {boolean} Returns true if the subsequence is found, otherwise false.
 */
function isSubsequence(subStr, string) {
  let i = 0;
  let j = 0;
  while (i < subStr.length && j < string.length) {
    if (subStr[i] == string[j]) {
      i++;
    }
    j++;
  }
  return i === subStr.length;
}
/**
 * Calculates the squares of the elements in the given sorted array and returns them in sorted order.
 *
 * @param {Array} arr - The sorted array of numbers.
 * @return {Array} The sorted array of squared numbers.
 */
function sortedSquares(arr){
  let left = 0;
  let right = arr.length-1;
  let index=right;
  let output=[];
  while(index>=0){
    if(Math.abs(arr[left])>Math.abs(arr[right])){
      output[index]=arr[left]*arr[left];
      left++;
    }else{
      output[index]=arr[right]*arr[right];
      right--;
    }
    index--;
  }
  return output;
}

export { check_if_palindrome, check_for_target, combine, isSubsequence,sortedSquares };
