//<reference path="p5.d.ts" />
///<reference path="browser.d.ts"/>
const bgred:string =`body {
                    background:#0f0;
                  }`; 
function listenForClicks():any
{
	document.addEventListener("click", (e) => {

		function beastNameToURL(beastName:string)
		{
	      switch (beastName)
	      {
	        case "red":
	          return chrome.extension.getURL("img/1.jpg");
	        case "blue":
	          return chrome.extension.getURL("img/2.jpg");
	        case "green":
	          return chrome.extension.getURL("img/3.jpg");
	      }
	    }

    function beastify(tabs:any):void
    {
      chrome.tabs.insertCSS({code: bgred}, () => {
        let url = beastNameToURL(e.target.textContent);
        chrome.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url
        });
      });
    }
    function reset(tabs:any):void
    {
      chrome.tabs.removeCSS({code: bgred}, () => {
       chrome.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        })
      });
    }
    if (e.target.classList.contains("beast")) {
      chrome.tabs.query({active: true, currentWindow: true},beastify);
    }
    else if (e.target.classList.contains("reset")) {
      chrome.tabs.query({active: true, currentWindow: true},reset);
    }
  });

}
chrome.tabs.executeScript({file: "js/contentscript.js"},listenForClicks);