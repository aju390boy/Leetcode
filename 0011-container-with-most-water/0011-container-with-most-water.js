/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let h=0;
    let m=0;
    let max=0;
    let low=0;
    let high=height.length-1;
    while(low < high){
    
           h=high-low;
           m=Math.min(height[high],height[low])
          if(h*m>max){
            max=h*m;
          }
          if(height[low] < height[high]){
    low++;
}else{
    high--;
}
            }
        
    
    return max
};