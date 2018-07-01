let pepole:[{}] = [
{'first':'hassan', 'last': 'osama', 'year': 2001, 'passed': 2050},
{'first':'ahmed', 'last': 'samir', 'year': 1800, 'passed': 1870},
{'first':'mohamed', 'last': 'ahmed', 'year': 1805, 'passed': 1850},
{'first':'samir', 'last': 'mohamed', 'year': 1994, 'passed': 2010},
{'first':'khaled', 'last': 'yusaf', 'year': 2010, 'passed': 2070},
{'first':'mostfa', 'last': 'khaled', 'year': 1750, 'passed': 1810}
];
let names:string[] = ['zero','ahmed', 'mohamed', 'samir', 'mostfa', 'khaled'];
const somepepoles:boolean = pepole.some((c:any) => c.year >= 2000);
console.log(somepepoles);
//to return true if one value = true
const everypepoles:boolean = pepole.every((c:any) => c.year >= 2000);
console.log(everypepoles);
//to return true if all value = true
const firstname:any = names.find((c:any) => c === "ahmed");
console.log(firstname);
//to return first value = true
const firstindex:any = names.findIndex((c:any) => c === "ahmed");
console.log(firstindex);
//to return first index postion value = true
const namesremove:any = names.findIndex((c:any) => c === "ahmed");
names = [
	...names.slice(0,namesremove),
	...names.slice(namesremove + 1)
];
console.table(names);
//to return first value = true