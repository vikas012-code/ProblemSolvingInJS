function reverse_array(arr){
   //finding length of array but one less 
    let len=arr.length-1;
    //displaying array before reversing it
    console.log(arr)
        for(let i=0;i<arr.length/2;i++){
            //swapping half arrays as other half will automatically swapped
            let temp=arr[i];
            arr[i]=arr[len];
            arr[len]=temp;
            //subtracting 1 from len(length of array 1 less) to move forward to center
            len--;
        }
        //dispaying array after swapping
        console.log(arr)
    }
reverse_array(["vikas","nitish","komal","kamal","dev"]);