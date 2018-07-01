interface executeScriptObject
{
	file?:string,
	allFrames?:boolean,
	code?:string,
	tabsid?:string
}
interface queryInfo
{
	active?:boolean,
	pinned?:boolean,
	audible?:boolean,
	muted?:boolean,
	highlighted?:boolean,
	index?:number,
	url?:string|string[],
	windowId?:number,
	currentWindow?:boolean
}
declare class methode {
	//events
	extension:methode;
	tabs:methode;
	runtime:methode;
	onMessage:methode;
	//fire event function
	addListener(func:Function):methode;
	//convert url to http url
	getURL(url:string):methode;
	//to send message to other script
	sendMessage(tabsid:string,message:object,Callback?:Function):methode;
	//Injects JavaScript code from file  into a page = content script
	executeScript(message:executeScriptObject,Callback?:Function):methode;
	//add css code or file
	insertCSS(message:executeScriptObject,Callback?:Function):methode;
	//remove ur code add
	removeCSS(message:executeScriptObject,Callback?:Function):methode;
	//Gets all tabs that have the specified properties select tabs
	query(queryInfo:queryInfo,Callback?:Function):methode;

}
declare var browser:methode;
declare var chrome:methode;