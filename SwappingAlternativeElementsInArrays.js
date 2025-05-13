function reverse_array(arr){
   //finding length of array but one less 
    let len=arr.length-1;
    //displaying array before swapping it it
    console.log(arr)
        for(let i=0;i<arr.length;i+=2){
            //swapping alternative element of arrays
            if(i!=len){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            }
        }
        //dispaying array after swapping
        console.log(arr)
    }
reverse_array([7,5,4,0,8,9])