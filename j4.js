function sm(n){
    var sn=0;
    var s=0;
    while(sn<=n){
        sn+=s++;
        console.log(s);
    }
    return s-2;
   
}
console.log(sm(11));