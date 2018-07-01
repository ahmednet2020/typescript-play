let pepole:[{}] = [
{'first':'hassan', 'last': 'osama', 'year': 2001, 'passed': 2050},
{'first':'ahmed', 'last': 'samir', 'year': 1800, 'passed': 1870},
{'first':'mohamed', 'last': 'ahmed', 'year': 1805, 'passed': 1850},
{'first':'samir', 'last': 'mohamed', 'year': 1994, 'passed': 2010},
{'first':'khaled', 'last': 'yusaf', 'year': 2010, 'passed': 2070},
{'first':'mostfa', 'last': 'khaled', 'year': 1750, 'passed': 1810}
];
let names:string[] = ['zero, osama','ahmed, samir', 'mohamed, samir', 'samir, mohmaed', 'mostfa, khaled', 'khaled, ahmed'];
let namess:string[] = ['zero','ahmed', 'mohamed', 'samir', 'khaled', 'ahmed'];
const pepoles:any[] = pepole.filter((c:any) => c.year >= 2000);
console.table(pepoles);
//to return true value  and index and all array this mothode take a 3 aragument
const fullname:any[] = pepole.map((c:any) => `${c.first} ${c.last}`);
console.log(fullname);
// to return some array lenght
const older:any[] = pepole.sort((a:any, b:any) => a.year - b.year);
console.table(older);
// to sort array but return 1 or -1
const totalyear:number= pepole.reduce(function (a:number, b:any) {
	let yearlife:number = b.passed - b.year;
	if(yearlife > a){
		a = yearlife;
	}
	return a;
} , 0);
console.log(totalyear);
//to return total of mothode 
const olderyear:any[] = pepole.sort(function (a:any, b:any) {
	const lastguy:number = a.passed - a.year;
	const nextguy:number = b.passed - b.year;
	return lastguy > nextguy ? -1: 1;
});
console.table(olderyear);
// to sort how life moro then else;
// const category:any = document.querySelector(".links");
// const links:any = [...category.querySelectorAll("a")];
//= Array.from to make it array
// const de:any = links
// 					.map((link:any) => link.textContent)
// 					.filter((name:any) => name.includes('do')); 
// search for link have do string includes is search in string and return true or false

const alpha:any = names.sort((a,b) => {
	let [afirst, alast]= a.split(", ");
	let [bfirst, blast] = b.split(", ");
	return afirst > bfirst? 1: -1;
}); 
console.log(alpha);
// to sort name from a to z
const namesnumber:any = namess.reduce(function(object:any, item) {
	if(!object[item]){
		object[item] = 0;
	}
	object[item]++;
	return object;
}, {});
console.log(namesnumber);
// to know how many name repeat