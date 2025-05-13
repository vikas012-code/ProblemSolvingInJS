let arr=[1,3,5,7];
let arr2=["apple","banana","apple","pineapple"]

function myfilter(ar,callback){
    let temp=[]
    for(let i=0;i<ar.length;i++){
        if(callback(ar[i])==true)
            temp.push(ar[i])
    }
    return temp;
}

function compare(a){
    if(a>3)
        return true;
}

let new_arr=myfilter(arr,compare);
let new_arr2=myfilter(arr2,(a)=>a=="apple")

console.log(new_arr)
console.log(new_arr2)