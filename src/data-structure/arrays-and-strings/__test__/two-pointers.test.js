import {
  check_if_palindrome,
  check_for_target,
  combine,
  isSubsequence,
  sortedSquares
} from "../two-pointers";

describe("Two pointer", () => {
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

  it("sortedSquares", () => {
    expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
    expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
  });
});
