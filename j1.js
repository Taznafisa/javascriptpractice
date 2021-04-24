const matches=(obj,source)=>
Object.keys(source).every(key=>
obj.hasOwnProperty(key) && obj[key]===source[key]);
console.log(matches({age:23,hair:'long',beard:true},{hair:'long',beard:true}));
console.log(matches({hair:'short',age:23,be:true},{hair:'short',age:23,be:true}));
console.log(matches({hair:'short',age:12,t:true},{hair:'long',age:12,t:true}));