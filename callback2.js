function add(a,b)
{ 
  //return a,b;
  //arguments[0];
  //arguments[1];
  console.log(a+b);
}
function sub(a,b)
{
 console.log(a-b);
}
function multi(a,b)
{
return a*b;
}
function div(a,b)
{
return a/b;
}
function display(a,b){
console.log(a,b);
}
function calcu(a,b,callback){
    if(a==null || b==null){
        console.log ("forget to enter vlue");
          
   
}else 
   return callback(a,b);

}
console.log(calcu(3,4,function(A,B){
    return A-B;
}));