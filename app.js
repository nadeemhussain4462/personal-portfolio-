const hamburger = document.getElementById('hamburger');
const list = document.getElementById('list');

hamburger.addEventListener('click', ()=>{
    list.classList.toggle('navlist-active');
});