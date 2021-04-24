function sumstring(n){
   var j=0;
   for(var i=0;i<n.length;i++){
       if(/[0-9]/.test(n[i])){
           j+=parseInt(n[i]);
       }
    
   }
   return j;
}
console.log(sumstring('sdd41'));
console.log(sumstring('dd2'));