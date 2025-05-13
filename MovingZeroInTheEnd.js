function movezero(arr){
    let count=0;
    let len=arr.length;
    for(let i=0;i<len;i++){
        if(arr[i]!==0){
            arr.push(arr[i])
        }
        else{
            count++;
        }
    }
    for(i=0;i<len;i++){
        arr.shift();
    }
    for(i=0;i<count;i++){
        arr.push(0)
    }
    console.log("arrays after moving zero "+arr);
}
movezero([3,0,5,6,7,0,8,0]);