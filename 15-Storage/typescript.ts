document.addEventListener("load", ready);
document.addEventListener("DOMContentLoaded", ready);
function ready():void{
"use strict";
const  form:any = document.querySelector(".form-flex");
const  list:any = document.querySelector(".list-item ul");
let  items:any = JSON.parse(sessionStorage.getItem("itemslist"))|| [];

function addlist(e:any):void{
	e.preventDefault();
	const value:any = this.querySelector("input").value;
	let item:any = {
		value,
		done:false
	};
	items.push(item);
	print(items, list);
	storge(items);
	this.reset();
}
function storge(data:any):void{
	if(typeof(Storage) !== "undefined"){
		var data:any = JSON.stringify(data);
		sessionStorage.setItem("itemslist",data);
	} else {
		window.alert("your browser is old");
	}
}
function print(itemslist:any[] = [], list:any):void {
	list.innerHTML = itemslist.map((item:any, i:number) => {
		return 	`
		<li>
		<input type="checkbox" data-index=${i} name="${item.value}" id="text${i}" ${item.done? 'checked':''}>
		<label for="text${i}">${item.value}</label>
		</li>
		`;
	}).join("");
}
function toggledone(e:any):void {
	if(!(e.target.nodeName === "INPUT")) return;
	let index:number = Number(e.target.dataset.index);
	items[index].done = !items[index].done;
	storge(items);

}
form.addEventListener("submit", addlist);
list.addEventListener("click", toggledone);
print(items, list);

}