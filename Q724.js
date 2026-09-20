// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


//pivot index: the sum of all the right index is equal to the sum of all the left index
var pivotIndex = function(nums) {
    let n = nums.length;
    for(let i = 0; i < n; i++){
        let leftSum =0;
        let rightSum =0;
    for(let j =0; j<i-1;j++){
            leftSum += nums[j];
        }
        for(let j=i+1;j<n;j++){
            rightSum += nums[j];
        }
        if(leftSum === rightSum)
            return i;

    }
    return -1;
}