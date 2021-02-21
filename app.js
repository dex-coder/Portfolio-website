//adding fixed class to the navbar 
const navbar = document.querySelector(".navbar_container");
//console.log(navbar);
window.addEventListener("scroll", function(){
    const scroll_height = window.pageYOffset;
    //console.log(scroll_height) 
    nav_height = navbar.getBoundingClientRect().height;
    //console.log(nav_height)
    if(scroll_height>nav_height){
        navbar.classList.add("fixed")
    }
    else{
        navbar.classList.remove("fixed");
    }
})

//adding show_links class to the toogle
const nav_toogle = document.querySelector(".nav_toogle");
nav_toogle.addEventListener("click", function(){
    document.querySelector(".navbar_links").classList.toggle("show_links");
})

const navbar_links_toogle = document.querySelector(".navbar_links").querySelectorAll("a")
//console.log(navbar_links_toogle);
navbar_links_toogle.forEach(element=>{
    element.addEventListener("click",function(){
        document.querySelector(".navbar_links").classList.remove("show_links");

    })
})



//adding active class to the navbar links
const navbar_links = document.querySelector(".navbar_links").querySelectorAll("a");
//console.log(navbar_links)
navbar_links.forEach(element=>{
    element.addEventListener("click",function(){
        navbar_links.forEach(link=>link.classList.remove("active"))
        this.classList.add("active")
    })
    //this.classList.add("active")
})




//adding active class to the filter buttons
const filter_btns = document.querySelector(".buttons").querySelectorAll("li");
const project_items = document.querySelector(".project_container").children;
//console.log(project_items);
//console.log(filter_btns)
filter_btns.forEach(element=>{
    element.addEventListener("click",function(){
        filter_btns.forEach(link=>link.classList.remove("active"))
        this.classList.add("active")
        const target = this.getAttribute("data-target")
        //console.log(target)
        for(let k=0; k<project_items.length; k++){
            project_items[k].style.display="none";

            if(target==project_items[k].getAttribute("data-id")){
                project_items[k].style.display="block";
            }
            if(target=="all"){
                project_items[k].style.display="block";
            }

        }

    })
    //this.classList.add("active")
});

//smooth scroll
const nav_links = document.querySelector(".navbar_links").querySelectorAll("a");
//console.log(nav_links);
const navbar_container = document.querySelector(".navbar_container")
//console.log(navbar_container);
nav_links.forEach(element=>{
    element.addEventListener("click",function(e){
        //prevent default
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        //console.log(id)
        const element = document.getElementById(id);
        //console.log(element);
        //Calculate the fixed heights
        
        //console.log(navbar)
        navbar_height = navbar.getBoundingClientRect().height;
        //console.log(navbar_height);
        const navbar_container_height = navbar_container.getBoundingClientRect().height;
        //console.log(navbar_container_height);
        let  fixed_nav = navbar.classList.contains("fixed")
        let position = element.offsetTop - navbar_height;
        window.scrollTo({
            left:0,
            top:position,
        });
        //document.querySelector(".navbar_links").classList.remove("show_links");
        
    });
});


//code for pre loader
const pre_loader = document.querySelector(".pre_loader");
//console.log(pre_loader)
window.addEventListener('load',function(){
    pre_loader.classList.add("hide_loader")
})

window.onload = function(){
    window.scrollTo(0,0);
}








