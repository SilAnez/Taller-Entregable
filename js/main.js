function showMenu(){
 const btn = document.querySelector('.nav-bar-btn')
 const list = document.querySelector('.links-nav-bar')
 btn.addEventListener('click', function(){
    list.classList.toggle('active');
 });
}
showMenu();