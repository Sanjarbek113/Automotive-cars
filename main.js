const header = document.querySelector(".header-flex");
const links = document.querySelectorAll(".header-link");
const charBtn = document.querySelector(".char-btn");
window.onscroll = function(){
    let top = window.scrollY;
    if(top >= 100){
        header.classList.add("active");
        for(let key of links){
            key.classList.add("active-links");
        }
    }
    else{
        header.classList.remove("active");
        for(let key of links){
            key.classList.remove("active-links");
        }
    }
};

charBtn.addEventListener("click", (e) =>{
    alert("Bu qismini qilishga vaqtim yetmadi");
})