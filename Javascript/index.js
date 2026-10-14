var x = "hello";
x = 5;
for(var i = 0; i<10; i++){}
console.log(x);
console.log(i);
console.log(b);
var b;

{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
let a = 9;
console.log(a,"is a/an", typeof a);
a = "Hello";
console.log(a,"is a/an", typeof a);
a = true;
console.log(a,"is a/an", typeof a);
a = null;
console.log(a,"is a/an", typeof a);
a = undefined;
console.log(a,"is a/an", typeof a);

let c = 4;
if(c == "4"){ // == checks values, === checks both value and datatype
    console.log(true);
}
var obj = {
    name: "Jagrati",
    occupation: "Student",
    show: showJob
}
console.log(obj);
console.log(obj.name);
obj.show();
function showJob(){
    console.log(obj.occupation);
    
}
