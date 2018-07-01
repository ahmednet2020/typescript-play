"use strict";
var pepole = [
    { 'first': 'hassan', 'last': 'osama', 'year': 2001, 'passed': 2050 },
    { 'first': 'ahmed', 'last': 'samir', 'year': 1800, 'passed': 1870 },
    { 'first': 'mohamed', 'last': 'ahmed', 'year': 1805, 'passed': 1850 },
    { 'first': 'samir', 'last': 'mohamed', 'year': 1994, 'passed': 2010 },
    { 'first': 'khaled', 'last': 'yusaf', 'year': 2010, 'passed': 2070 },
    { 'first': 'mostfa', 'last': 'khaled', 'year': 1750, 'passed': 1810 }
];
var names = ['zero', 'ahmed', 'mohamed', 'samir', 'mostfa', 'khaled'];
var somepepoles = pepole.some(function (c) { return c.year >= 2000; });
console.log(somepepoles);
var everypepoles = pepole.every(function (c) { return c.year >= 2000; });
console.log(everypepoles);
var firstname = names.find(function (c) { return c === "ahmed"; });
console.log(firstname);
var firstindex = names.findIndex(function (c) { return c === "ahmed"; });
console.log(firstindex);
var namesremove = names.findIndex(function (c) { return c === "ahmed"; });
names = names.slice(0, namesremove).concat(names.slice(namesremove + 1));
console.table(names);
//# sourceMappingURL=ts.js.map