function forLoop(array){
array = [];
for(var i = 0; i < 25; i++){
  if(i === 0 || i === 1){
    array.push(`I am ${i} strange loop`);
  } else{
    array.push(`I am ${i} strange loops`);
  }
 }
 return array;
}
var number = 25;
function whileLoop(number) {
  while(number > - 1){
  console.log(number);
  number--; 
  
}
return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do{
    array.pop();
  } while( array.length > 0 && maybeTrue());
  return array;
}