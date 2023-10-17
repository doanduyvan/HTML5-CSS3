
const nav_top = document.querySelector(".navtopbar_bottom");
document.addEventListener('scroll',()=>{
    const document1 = document.documentElement;
    const position = nav_top.getBoundingClientRect();
    console.log(document1.scrollTop)
    if(position.bottom <= 0){
        nav_top.classList.add('nav_top_add');
    }
    if(document1.scrollTop === 0){
        nav_top.classList.remove('nav_top_add');
    }
});