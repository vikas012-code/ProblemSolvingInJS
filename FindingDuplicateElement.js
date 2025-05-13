function findDup(arr=[]){
    let out=false;
    let duplicat=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[i]===arr[j]){
                out=true;
                duplicat.push(arr[i])
            }
        }
    }
    console.log(out ,duplicat)
}

findDup([1,6,4,8,3,9,6,1])