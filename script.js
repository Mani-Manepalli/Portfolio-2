
var tl = document.getElementsByClassName("tl");
var tc = document.getElementsByClassName("tc");

function opentab(tabname){
    for(tablink of tl){
        tablink.classlist.remove("al");
    }
     for(tabcontent of tc){
        tabcontent.classlist.remove("at");
    }
}