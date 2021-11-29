// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

function addModalListener(){
    //this gets modal 1 when login button is clicked
    $(".bg-click").click(function(e) {
        // $(".modal").css("display", "none");
        gsap.to($(".modal"), { scale : 0, duration: 0, onComplete: showAlert});
    });
}


function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");


    if (pageID == "") {
        MODEL.getMyContent("home");
    }
    else {
        MODEL.getMyContent(pageID);
    }
}

function initListeners(){
    $(window).on("hashchange", route);
    route();
}


$(document).ready(function(){
    initListeners();
    // navToPage("home")
});
