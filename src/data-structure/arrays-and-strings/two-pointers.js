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
 * Reverses a given string.
 *
 * @param {string} string - The string to be reversed.
 * @return {string} The reversed string.
 */
function reverseString(string) {
  let left = 0,
    right = string.length - 1;
  while (left < right) {
    let temp = string[left];
    string[left] = string[right];
    string[right] = temp;
    left++;
    right--;
  }
  return string;
}

/**
 * Calculates the squares of the elements in the given sorted array and returns them in sorted order.
 *
 * @param {Array} arr - The sorted array of numbers.
 * @return {Array} The sorted array of squared numbers.
 */
function sortedSquares(arr) {
  let left = 0;
  let right = arr.length - 1;
  let index = right;
  let output = [];
  while (index >= 0) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      output[index] = arr[left] * arr[left];
      left++;
    } else {
      output[index] = arr[right] * arr[right];
      right--;
    }
    index--;
  }
  return output;
}

class TwoPointer {
  swap(array, left_pointer, right_pointer) {
    let temp = array[left_pointer];
    array[left_pointer] = array[right_pointer];
    array[right_pointer] = temp;
  }

  reverse_array(array) {
    if (array.length <= 1) {
      return array;
    }
    let left_pointer = 0;
    let right_pointer = array.length - 1;
    while (left_pointer < right_pointer) {
      this.swap(array, left_pointer, right_pointer);
      left_pointer++;
      right_pointer--;
    }
    return array;
  }

  remove_duplicates_from_sorted_array(array) {
    if (array.length <= 1) {
      return array;
    }
    let left_pointer = 0;
    let next_pointer = left_pointer + 1;
    while (left_pointer < array.length && next_pointer < array.length) {
      if (array[left_pointer] != array[next_pointer]) {
        left_pointer++;
        array[left_pointer] = array[next_pointer];
      }
      next_pointer++;
    }
    return array.slice(0, left_pointer + 1);
  }

  two_sum_for_sorted_array(array, target) {
    let left_pointer = 0;
    let right_pointer = array.length - 1;
    while (left_pointer < right_pointer) {
      if (array[left_pointer] + array[right_pointer] < target) {
        left_pointer++;
      } else if (array[left_pointer] + array[right_pointer] > target) {
        right_pointer--;
      } else {
        return [left_pointer, right_pointer];
      }
    }
  }

  reverse_Word_in_a_string(string) {
    let str_arr = string.split(" ");
    let left_pointer = 0;
    let right_pointer = str_arr.length - 1;
    while (left_pointer < right_pointer) {
      let temp = str_arr[left_pointer];
      str_arr[left_pointer] = str_arr[right_pointer];
      str_arr[right_pointer] = temp;
      left_pointer++;
      right_pointer--;
    }
    return str_arr.join(" ");
  }

  reverse_array_between_pointer(array, left_pointer, right_pointer) {
    while (left_pointer < right_pointer) {
      let temp = array[left_pointer];
      array[left_pointer] = array[right_pointer];
      array[right_pointer] = temp;
      left_pointer++;
      right_pointer--;
    }
    return array;
  }
  rotate_array(array, k) {
    const length = array.length;
    k = k % length;
    this.reverse_array_between_pointer(array, 0, length - 1);
    this.reverse_array_between_pointer(array, 0, k - 1);
    this.reverse_array_between_pointer(array, k, length - 1);
    return array;
  }

  closest_pair_in_sorted_array(array, sum) {
    let left_pointer = 0;
    let right_pointer = array.length - 1;
    let closest = Number.MAX_VALUE;
    let answer = null;
    while (left_pointer < right_pointer) {
      if (
        Math.abs(array[left_pointer] + array[right_pointer] - sum) < closest
      ) {
        closest = Math.abs(array[left_pointer] + array[right_pointer] - sum);
        answer = [array[left_pointer], array[right_pointer]];
      }
      if (array[left_pointer] + array[right_pointer] < sum) {
        left_pointer++;
      } else {
        right_pointer--;
      }
    }
    return answer;
  }

  closest_pair_from_two_sorted_array(arr1, arr2, k) {
    let left_pointer = 0;
    let right_pointer = arr2.length - 1;
    let closest = Number.MAX_SAFE_INTEGER;
    let answer = [arr1[left_pointer], arr2[right_pointer]];
    while (left_pointer < arr1.length && right_pointer >= 0) {
      if (Math.abs(arr1[left_pointer] + arr2[right_pointer] - k) <= closest) {
        answer = [arr1[left_pointer], arr2[right_pointer]];
        closest = Math.abs(arr1[left_pointer] + arr2[right_pointer] - k);
      }
      if (arr1[left_pointer] + arr2[right_pointer] < k) {
        left_pointer++;
      } else {
        right_pointer--;
      }
    }
    return answer;
  }

  product_of_array_except_self(arr) {
    let output = new Array(arr.length);
    let temp = 1;
    for (let i = 0; i < arr.length; i++) {
      output[i] = temp;
      temp *= arr[i];
    }
    temp = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      output[i] *= temp;
      temp *= arr[i];
    }
    return output;
  }
}

export {
  check_if_palindrome,
  check_for_target,
  combine,
  isSubsequence,
  reverseString,
  sortedSquares,
  TwoPointer,
};
