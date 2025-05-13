function max_value(arr){
let maxv;
for(let i=2;i<arr.length-2;i++){
    if(arr[0]<arr[1])
        maxv=arr[1];
    else
        maxv=arr[0];

    if(maxv<arr[i]){
        maxv=arr[i]
    }
    return maxv
}
}
console.log("max value"+max_value([11,-2,77,-32,33]));