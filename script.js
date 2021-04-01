// --------------------------------------top main nav bar script---------------------------------------------------------------------------------
let stickyNavBar = document.getElementById("forstickynav");
window.addEventListener("scroll",()=>{
    stickyNavBar.classList.toggle("sticky",window.scrollY > 0);

})
let toggler = document.getElementById("toggle");
let contenttoggle = document.getElementById("togglinglists");

toggler.addEventListener("click",()=>{
    contenttoggle.classList.toggle("active")})


    function dontclick(){
        window.alert("I'M A DUMMY BUTTON DON'T CLICK ME AGAIN!!!")
    }


//----------------------------------------COURSE SYLLABUS PAGE SCRIPT------------------------------------------------------------------------------
let dropdown=document.getElementById("god");
let content = document.getElementById("hidden-container");


dropdown.addEventListener("click",()=>{
    content.classList.toggle("hidden-active")
})
// ---------------------------------------CERTIFICATE PAGE SCRIPT----------------------------------------------------------------------------------

let learningSupport = document.getElementById("single-learning-two");
let industryMentors =  document.getElementById("imhidden");

learningSupport.addEventListener("click", ()=>{
    industryMentors.classList.toggle("actigo");
    learningSupport.style.borderLeft="3px solid red";
})
