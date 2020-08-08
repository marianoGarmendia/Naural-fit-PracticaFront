window.onload = () => {
    let botton = document.getElementById("menu-btn");
    botton.addEventListener("click", () => {
        let navMenu = document.getElementById("nav-menu");
        if(navMenu.className == "nav-menu"){
           navMenu.className = "nav-menu show";
        }else{
            navMenu.className = "nav-menu";
        }
    })

    ScrollReveal().reveal('.banner-one',{delay: 500 , duration: 500, reset: true});
    ScrollReveal().reveal('.product-cards img',{delay: 500 , duration: 500, reset: true});
    ScrollReveal().reveal('.banner-two',{delay: 500 , duration: 500, reset: true});
    ScrollReveal().reveal('.social',{delay: 500 , duration: 500, reset: true});
    ScrollReveal().reveal('.footer-links',{delay: 500 , duration: 500, reset: true});
}



