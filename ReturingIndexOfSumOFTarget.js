function two_sum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            let first=i;
            let second=j;
            return first+" "+second;
        }
        }  
    }
}

console.log(two_sum([4,2,3,5],6))