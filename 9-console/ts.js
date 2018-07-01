console.log("%c ahmed is my6 name", "background:red;font-size:50px");
//%c return css style for console
var y = "ahmed";
console.log("%s ahmed is my6 name", y);
//%s return as string var
var y = 555;
console.log("%d ahmed is my6 name", y); 
//%d return as number var
console.warn("%d ahmed is my6 name", y);
//return warn yellow color
console.error("%d ahmed is my6 name", y);
//return error red color
y = ["ahmed", "mohamed"];
console.table(y);
//return array as table
console.group("lol");
console.log("lol");
console.groupEnd("lol");
//return as group