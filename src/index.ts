const menuBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');




menuBtn?.addEventListener('click', ()=>{
    menu?.classList.toggle('active');
})
