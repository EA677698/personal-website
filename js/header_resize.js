window.onscroll = function() {updateHeader()};

function updateHeader() {
    let scroll_threshold = 10;
    if(document.body.scrollTop > scroll_threshold || document.documentElement.scrollTop > scroll_threshold){
        document.getElementsByTagName("header")[0].style.paddingBottom = "2%";

        document.getElementById("title").style.top = "2vw";
        document.getElementById("title").style.fontSize = "1.5vw";
        document.getElementById("title").style.width = "9%";
        document.getElementById("title").style.margin = "auto auto auto 1vw";

        document.getElementById("navigation").style.margin = "auto 60% auto auto";
        document.getElementById("navigation").style.bottom = "1vw";
        document.getElementById("navigation").style.fontSize = "1.25vw";

    } else{
        document.getElementsByTagName("header")[0].style.paddingBottom = "5%";

        document.getElementById("title").style.fontSize = "4.5vw";
        document.getElementById("title").style.width = "25%";
        document.getElementById("title").style.margin = "auto";
        document.getElementById("title").style.top = "3vw";

        document.getElementById("navigation").style.width = "25%"
        document.getElementById("navigation").style.display = "block";
        document.getElementById("navigation").style.margin = "5% auto auto auto";
        document.getElementById("navigation").style.bottom = "0";
        document.getElementById("navigation").style.fontSize = "1.25vw";


    }
}