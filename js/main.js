// menu 
let menuList=document.querySelector(".fa-bars");

menuList.addEventListener("click",function myMenuFunction(){
    let menuBtn = document.getElementById('myNavMenu');
        menuBtn.classList.toggle("responsive");
})

// dark mode

let body = document.querySelector("body");

let toggleSwitch=document.querySelector("#toggle-switch");

toggleSwitch.addEventListener("click",function(){
    body.classList.toggle('dark');
})


//-----------typing effect-----------------
let typing=new Typed(".typedText",{
    strings: ["Designer","coder","Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})


//--------scroll----------------
let sr=ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

sr.reveal('.featured-name',{ delay: 100 });
sr.reveal('.text-info',{ delay: 200 });
sr.reveal('.text-btn',{ delay: 200 });
sr.reveal('.socical_icons',{ delay: 200 });
sr.reveal('.feature-image',{ delay: 320 });

sr.reveal('.project-box',{ interval: 200 });

sr.reveal('.top-header',{});


let scrollLeft=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:"true",
})

scrollLeft.reveal('.about-info',{ delay: 100 });
scrollLeft.reveal('.contact-info',{ delay: 100 });

let scrollRight=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:"true",
})

scrollRight.reveal('.skill',{ delay: 100 });
scrollRight.reveal('.skill-box',{ delay: 100 });


//----------------------------------------------------------------





