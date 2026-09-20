// 
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let s=0, e=nums.length-1;
    while(s<=e){
        let mid=Math.floor((s+e)/2);
        if(num[mid]==mid){
            s=mid+1;
        }else{
            e=mid-1;
        }
    }
};