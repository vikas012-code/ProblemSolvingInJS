function FindSubSet(superset,subset){
    if(superset.length==0 || subset.length==0){
        return "cannot enter empty arrays"
    }
    let sub=0;;
    for(let j=0;j<subset.length;j++){
        for(let i=0;i<superset.length;i++){
            if(subset[j]===superset[i]){
                superset.splice(i,1)
                sub++;
                break
            }
        }
    }
    if(sub===subset.length){
        return true;
    }
    else{
        return false;
    }
}

console.log(FindSubSet(["a","b",1,5,2,],["a",1,2]))