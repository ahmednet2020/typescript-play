document.addEventListener("DOMContentLoaded",function () {
	const arry:any[] = ["The zero","thE ahmed", "the mohamed", "An samir", "an tero", "tHe bahero"];
	function remove(e:any):any {
		return e.replace(/^(the|an)/i,'').trim();
	}
	const arraysory:any = arry.sort((a:any,b:any):any => remove(a) > remove(b)? 1 :-1 );
	const ul:any = document.querySelector(".add");
	ul.innerHTML = arraysory.map((e:any) => `<li>${e}</li>`).join("");
});