function max_value(arr){
    if(arr.length==0)
        return "array is empty"
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
          max=arr[i];
        }
    }
    return max;
}
console.log(max_value([11,-22,77,-55,44]))