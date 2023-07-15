import {
  check_if_palindrome,
  check_for_target,
  combine,
  isSubsequence,
  reverseString,
  sortedSquares,
  TwoPointer,
} from "../two-pointers";

describe("Two pointer", () => {
  const twoPointer = new TwoPointer();
  it("check_if_palindrome", () => {
    expect(check_if_palindrome("racecar")).toBeTruthy();
    expect(check_if_palindrome("racecare")).toBeFalsy();
  });

  it("check_for_target", () => {
    expect(check_for_target([2, 7, 11, 15], 9)).toBeTruthy();
    expect(check_for_target([2, 7, 11, 15], 18)).toBeTruthy();
    expect(check_for_target([2, 7, 11, 15], 5)).toBeFalsy();
  });

  it("combine", () => {
    /* combine two sorted array */
    expect(combine([1, 4, 7, 20], [3, 5, 6, 9])).toEqual([
      1, 3, 4, 5, 6, 7, 9, 20,
    ]);
    expect(combine([1, 4, 7, 20], [3, 5, 6, 7, 9])).toEqual([
      1, 3, 4, 5, 6, 7, 7, 9, 20,
    ]);
  });

  it("isSubsequence", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
    expect(isSubsequence("abcd", "ahbgdc")).toBeFalsy();
  });
  it("reverseString", () => {
    expect(reverseString(["r", "a", "h", "u", "l"])).toEqual([
      "l",
      "u",
      "h",
      "a",
      "r",
    ]);
    expect(reverseString(["s", "h", "a", "r", "m", "a"])).toEqual([
      "a",
      "m",
      "r",
      "a",
      "h",
      "s",
    ]);
  });

  it("sortedSquares", () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });

  it("reverse_array", () => {
    expect(twoPointer.reverse_array([])).toEqual([]);
    expect(twoPointer.reverse_array([1])).toEqual([1]);
    expect(twoPointer.reverse_array([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it("remove_duplicates_from_sorted_array", () => {
    expect(twoPointer.remove_duplicates_from_sorted_array([])).toEqual([]);
    expect(twoPointer.remove_duplicates_from_sorted_array([1])).toEqual([1]);
    expect(
      twoPointer.remove_duplicates_from_sorted_array([1, 1, 2, 2, 3])
    ).toEqual([1, 2, 3]);
  });

  it("two_sum_for_sorted_array", () => {
    expect(twoPointer.two_sum_for_sorted_array([2, 7, 11, 15], 9)).toEqual([
      0, 1,
    ]);
    expect(twoPointer.two_sum_for_sorted_array([2, 7, 11, 15], 18)).toEqual([
      1, 2,
    ]);
  });

  it("reverse_Word_in_a_string", () => {
    expect(twoPointer.reverse_Word_in_a_string("racecar")).toEqual("racecar");
    expect(twoPointer.reverse_Word_in_a_string("the sky is blue")).toEqual(
      "blue is sky the"
    );
  });

  it("reverse_array_between_pointer", () => {
    expect(
      twoPointer.reverse_array_between_pointer([1, 2, 3, 4, 5, 6, 7], 0, 6)
    ).toEqual([7, 6, 5, 4, 3, 2, 1]);
    expect(
      twoPointer.reverse_array_between_pointer(
        [1, 6, 9, 2, 3, 8, 7, 5, 4],
        0,
        4
      )
    ).toEqual([3, 2, 9, 6, 1, 8, 7, 5, 4]);
  });

  it("rotate_array", () => {
    expect(twoPointer.rotate_array([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
    expect(twoPointer.rotate_array([1, 2, 3, 4, 5, 6, 7], 8)).toEqual([
      7, 1, 2, 3, 4, 5, 6,
    ]);
    expect(twoPointer.rotate_array([-1], 2)).toEqual([-1]);
    expect(twoPointer.rotate_array([], 2)).toEqual([]);
  });

  it("closest_pair_in_sorted_array", () => {
    expect(
      twoPointer.closest_pair_in_sorted_array(
        [1, 4, 5, 9, 10, 14, 55, 19, 20],
        15
      )
    ).toEqual([1, 14]);
  });

  it("closest_pair_from_two_sorted_array", () => {
    expect(
      twoPointer.closest_pair_from_two_sorted_array(
        [1, 4, 5, 7],
        [10, 20, 30, 40],
        32
      )
    ).toEqual([1, 30]);
    expect(
      twoPointer.closest_pair_from_two_sorted_array(
        [1, 4, 5, 7],
        [10, 20, 30, 40],
        40
      )
    ).toEqual([1, 40]);
  });

  it("product_of_array_except_self", () => {
    expect(twoPointer.product_of_array_except_self([1, 2, 3, 4])).toEqual([
      24, 12, 8, 6,
    ]);
  });
});
