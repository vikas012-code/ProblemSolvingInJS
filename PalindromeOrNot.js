function checkPalindrome(str=""){
    if(str.length==0){
        return "empty string is not allowed"
    }
    let len=str.length-1;
    for(let i=0;i<=str.length/2-1;i++){
        if(str[i].toLowerCase()!==str[len]){
            return false;
        }
        len--
    }
    return true
}
console.log(checkPalindrome("abcddcbac"))
