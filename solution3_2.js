function movezero(arr){
    let len=arr.length
    let j=0;
    console.log("arrays befor moving zero "+arr);
    for(let i=0;i<len;i++){
        if(arr[i]!=0){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            j=j+1;
            }
    }
    console.log("arrays after moving zero "+arr);
}
movezero([0,0,9,7,0,1,6]);
