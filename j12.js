function dd(n,m,k){
    if(n>m && m>k){
        return "strict mode";
    }
    else if(k>m){
        return "soft mode";
    }
    else{
        return "Undefined";
    }
}
console.log(dd(100,15,33));