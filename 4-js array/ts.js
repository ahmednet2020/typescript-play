"use strict";
var pepole = [
    { 'first': 'hassan', 'last': 'osama', 'year': 2001, 'passed': 2050 },
    { 'first': 'ahmed', 'last': 'samir', 'year': 1800, 'passed': 1870 },
    { 'first': 'mohamed', 'last': 'ahmed', 'year': 1805, 'passed': 1850 },
    { 'first': 'samir', 'last': 'mohamed', 'year': 1994, 'passed': 2010 },
    { 'first': 'khaled', 'last': 'yusaf', 'year': 2010, 'passed': 2070 },
    { 'first': 'mostfa', 'last': 'khaled', 'year': 1750, 'passed': 1810 }
];
var names = ['zero, osama', 'ahmed, samir', 'mohamed, samir', 'samir, mohmaed', 'mostfa, khaled', 'khaled, ahmed'];
var namess = ['zero', 'ahmed', 'mohamed', 'samir', 'khaled', 'ahmed'];
var pepoles = pepole.filter(function (c) { return c.year >= 2000; });
console.table(pepoles);
var fullname = pepole.map(function (c) { return c.first + " " + c.last; });
console.log(fullname);
var older = pepole.sort(function (a, b) { return a.year - b.year; });
console.table(older);
var totalyear = pepole.reduce(function (a, b) {
    var yearlife = b.passed - b.year;
    if (yearlife > a) {
        a = yearlife;
    }
    return a;
}, 0);
console.log(totalyear);
var olderyear = pepole.sort(function (a, b) {
    var lastguy = a.passed - a.year;
    var nextguy = b.passed - b.year;
    return lastguy > nextguy ? -1 : 1;
});
console.table(olderyear);
var alpha = names.sort(function (a, b) {
    var _a = a.split(", "), afirst = _a[0], alast = _a[1];
    var _b = b.split(", "), bfirst = _b[0], blast = _b[1];
    return afirst > bfirst ? 1 : -1;
});
console.log(alpha);
var namesnumber = namess.reduce(function (object, item) {
    if (!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {});
console.log(namesnumber);
//# sourceMappingURL=ts.js.map