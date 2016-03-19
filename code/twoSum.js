/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var tem, a, b;
    for(i = 0; i < nums.length - 1; i++) {
        for(j = i + 1; j < nums.length; j++) {
            tem = nums[i] + nums[j];
            while (tem == target) {
                a = i, b = j 
                break;
            }
        }
    }
    return [a, b];
};
