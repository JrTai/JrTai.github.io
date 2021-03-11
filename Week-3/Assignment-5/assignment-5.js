function twoSum(nums, target) {
    // your code here
    let dic = {}
    let diff;
    for (i=0; i<=nums.length; i++) {
        diff = target - nums[i]
        if (diff in dic) {
             return [dic[diff], i];
        } else {
            dic[nums[i]] = i;
        }
    }
    return -1;
}

/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
nums[0]+nums[1] is 9
*/

// console.log(twoSum([2,7,11,15], 9));