// const imgs = document.querySelectorAll(".header-imgset ul img")
// const prev_btn = document.querySelector(".prev-icon")
// const nextbtn = document.querySelector(".next-icon")

// let n = 0

// function changeimg() {
//     for (let i = 0; i < imgs.length; i++) {
//         imgs[i].style.display = "none";
//     }
//     imgs[n].style.display = "block";
// }

// changeimg();

// prev_btn.addEventListener('click', (e)=>{
//     if(n > 0){
//         n--;
//     }else{
        
//         n = imgs.length - 1;
//     }
//     changeimg();
// })

// nextbtn.addEventListener('click', (e)=>{
//     if (n < imgs.length - 1) {
        
//     } else {
//         n = 0;
//     }
//     changeimg();
// })

const img = document.querySelectorAll('.header-imgset')
const prevbtn = document.querySelector('.prev-icon')
const nextbtn = document.querySelector('.next-icon')

let n = 0;

function saif() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[n].style.display = "block";
}

saif();

prevbtn.addEventListener('click', (e)=>{
    if (n > 0) {
        n--;
    }else{
        n = img.length - 1;
    }
    saif();
})