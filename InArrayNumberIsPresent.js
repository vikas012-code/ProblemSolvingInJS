let arr=[1,2,3,5]
//take one array and number ,return message if number is present if not retruns array with adding new alement accoding to ascending order

function check(arr=[],num){
    if(arr.length===0){
        return"array is empty"
    }
    for(let i=0;i<arr.length;i++){
        if(num===arr[i]){
            return "number is present"
        }
    }
    for(let i=0;i<arr.length;i++){
        
        if(arr[i]<num){
            if(arr[i+1]>num){
                arr.splice(i,0,num);
                return arr;
            }
        }
    }
}

console.log(check(arr,4))


