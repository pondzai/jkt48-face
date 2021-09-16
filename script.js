var settingsmenu = document.querySelector(".setting-menu");
var darktb = document.getElementById("dark-tb")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("setting-menu-height");
}
darktb.onclick = function(){
    darktb.classList.toggle("dark-tb-on");
    document.body.classList.toggle("dark-tema");

    if(localStorage.getItem("tema") == "terang"){
        localStorage.setItem("tema", "gelap");
    }
    else{
        localStorage.setItem("tema", "terang");
    }
}

if(localStorage.getItem("tema") == "terang"){
    darktb.classList.remove("dark-tb-on");
    document.body.classList.remove("dark-tema");
}
else if(localStorage.getItem("tema") == "gelap"){
    darktb.classList.add("dark-tb-on");
    document.body.classList.add("dark-tema");
}
else{
    localStorage.setItem("tema", "terang");
}

