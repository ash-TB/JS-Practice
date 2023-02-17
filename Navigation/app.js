const navSlide = () =>{
    // get the berger html element
    const berger = document.querySelector(".berger")
    //get nav html ele
    const nav = document.querySelector(".nav-links")
    //get individual links for fade animation
    //querrySelectorAll bc want all links
    const navLinks = document.querySelectorAll(".nav-links li")

    // when click berger, want to be in active class
    berger.addEventListener("click", ()=> {
        //TOGGLE NAV
        nav.classList.toggle("nav-active")
        
        //ANIMATE LINKS
        //why want index? bc can easily animate delay between each
        navLinks.forEach((link, index) => {
            //gives a nice equal delay between each links
            //add value for init delay
            if (link.style.animation) {
                link.style.animation = " "
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //BEGER ANIMATION
        berger.classList.toggle("toggle");
    
    });
    
}

// if multiple functions then build an app function
const app = () =>{
    navSlide();
}

app();
