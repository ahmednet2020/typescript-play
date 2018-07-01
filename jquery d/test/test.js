"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var item = document.querySelectorAll(".item");
    var zone = document.querySelector(".zone");
    var li;
    var tl = new TimelineLite();
    Array.from(item).forEach(function(e){
        e.addEventListener("dragstart",dragstart,false); 
        e.addEventListener("dragover",dragover,false); 
    });
    zone.addEventListener("drop",drop,false); 

    function dragstart(e)
    {
        li = e.target;
        //setTimeout()
        //item.style.display = "none";
        e.dataTransfer.setData('text', e.target);
    }

    function dragover(e)
    {
        var x = e.dataTransfer.getData('text');
        //e.stopPropagation();
        e.target.parentElement.insertBefore(li,e.target);
        console.log(x);

    }

    function drop(e)
    {
        var x = e.dataTransfer.getData('application/node');
        console.log("ahmed");
    }
    //tl.to(zone,1,{right:-1000}).to(item,1,{left:-1000});
});