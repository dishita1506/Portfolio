var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
var skills=document.querySelector("#skills");
var education=document.querySelector("#education");
var experience=document.querySelector("#experience")

function opentab(name){
    if(name=='experience'){
     experience.classList.add("show");
     education.classList.remove("show");
     skills.classList.remove("show");
     skills.classList.remove("activepart")
     
    }
    if(name=='education'){
     education.classList.add('show');
     experience.classList.remove("show");
     skills.classList.remove("show");
     skills.classList.remove("activepart")
    
    }
    if(name=='skills'){
        skills.classList.add("show");
        experience.classList.remove("show");
        education.classList.remove("show");
    }
}



//EXCEL SHEET
