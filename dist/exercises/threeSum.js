const nums = [-1, 0, 1, 2, -1, -4];
const threeSum = function (nums) {
    console.log(nums);
    const solutionArray = [];
    if (nums.length <= 3) {
        return [];
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const target = 0 - (nums[i] + nums[j]);
            for (let k = j + 1; k < nums.length; k++) {
                if (target === nums[k]) {
                    const newArray = [nums[i], nums[j], nums[k]];
                    //    console.log(newArray);
                    solutionArray.push(newArray);
                }
            }
        }
    }
    //    console.log(solutionArray);
    return solutionArray;
};
threeSum(nums);
//# sourceMappingURL=threeSum.js.map