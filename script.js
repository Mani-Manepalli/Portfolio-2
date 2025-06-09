
var tabl = document.getElementsByClassName("tab-links");
var tabc = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tabl) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabc) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}




