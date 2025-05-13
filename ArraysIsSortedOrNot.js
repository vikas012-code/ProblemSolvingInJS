function is_sorted(arr){
    for(let i=0;i<arr.length-1;i++){ 
        if(arr[i]<=arr[i+1]){
        }
        else{
            return false; 
        }
    }
    return true;
}
console.log(is_sorted([1,5,3,4]));