function IsAnagram(str,str2){
    let out=true;
    if(!(str.length===str2.length)){
        return false;
    }
    for(let i=0;i<str.length;i++){
        let len=0
        for(let j=0;j<str.length;j++){
            len++;
            if(str[i]==str2[j])
            {
                break
            }
            if(len==str.length)
                {
                out=false; 
                } 
        }
    }
    return out;
}
console.log("friend ,finder" , IsAnagram("friend","finder"))
console.log("trap ,part" , IsAnagram("trap","part"))
console.log("draw ,drawing" , IsAnagram("drawing","draw"))