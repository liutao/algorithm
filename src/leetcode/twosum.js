// 给定一个整数数列，找出其中和为特定值的那两个数。

// 你可以假设每个输入都只会有一种答案，同样的元素不能被重用。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = [];
    for(var i = 0;i < nums.length; i++){
        hash[nums[i]] == undefined ? hash[nums[i]] = [i] : hash[nums[i]].push(i);
    }
    for(var i = 0; i < nums.length; i++){
        if(nums[i] * 2 == target){
            if(hash[target-nums[i]].length == 2)
                return [ hash[nums[i]][0], hash[nums[i]][1] ];
            else
                continue;       
        }
        if(hash[target-nums[i]] != undefined){
          return [ hash[nums[i]][0], hash[target-nums[i]][0] ];
        }
    }
};