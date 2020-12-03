/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.map((x,i)=>x.reduce((a,c)=>a+c)).sort((a,b)=>b-a)[0]
 };

//  https://leetcode.com/problems/richest-customer-wealth/