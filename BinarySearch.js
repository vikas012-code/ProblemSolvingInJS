function BinarySearch(arr=[],target=0){
    if(arr.length==0) return -1;

    let start = 0;
    let mid = Math.round(arr.length/2);
        for(let i=0; i<arr.length-1; i++){
            if(arr[mid]==target){
                return mid;
            }
            if(arr[mid]<target){
                start=mid
                mid=Math.round((start+arr.length)/2)
                if(arr[mid]==target){
                    return mid;
                }
            }
            else{
                mid=Math.floor((start+mid)/2);
                if(arr[mid]==target){
                    return mid;
                }
            }
        }
    return -1;
}

console.log("BinarySearch([-1,0,3,5,9,12],5) :",BinarySearch([-1,0,3,5,9,12],5))





// function BinarySearch(arr=[],target=0){

//         for(let i=0; i<arr.length; i++){
//             if(arr[Math.ceil(arr.length/2)]=target){
                
//             }
//             if(arr[Math.ceil(arr.length/2)]<target){
              
                
//             }
//             else{
                
//             }
//         }
//     return -1;
// }

// console.log(BinarySearch([-1,0,3,5,9,12],9))




