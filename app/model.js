var MODEL = (function(){

    var _getMyContent = function(pageID){
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            console.log(data);
            $("#app").html(data);
        });
    

    };
    return {
        getMyContent: _getMyContent,
    };
})();
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }