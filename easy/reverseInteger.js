/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = +String(x<0?x*-1:x).split('').reverse().join('')
    return (result < (Math.pow(2, 31) * -1) || result > (Math.pow(2, 31) -1)) ? 0 : x < 0 ? result * -1 : result
};

// https://leetcode.com/problems/reverse-integer/
// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.