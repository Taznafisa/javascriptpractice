function halfswap(n){ 
if(((n.length)%2)!=0){
return false;
}
for(var i=0;i<n.length/2;i++){
   var temp=n[i];
    n[i]=n[i+n.length/2];
    n[i+n.length/2]=temp;

}
return n;
}
console.log(halfswap([1,3,4,5]));
console.log(halfswap([2,3,5,6]));
