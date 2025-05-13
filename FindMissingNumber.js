function FindMissing(arr){
    let missing;
    for(let i=0;i<=arr.length;i++){
        let len=0
        for(let j=0;j<arr.length;j++){
            len++
            if(arr[j]===i){
                break
            }
            if(len==3){
                missing=i;
            }
        }
    }
    return missing;
}

console.log(FindMissing([3,0,1]))
