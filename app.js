const menuMobile = document.getElementById('menu-mobile');
window.addEventListener("click", function(event) {
    if (event.target.id === "hambur-header-only"){
        if (menuMobile.className.includes('show')){
            menuMobile.classList.remove('show');
            
        } else {
            menuMobile.classList.add('show');
        }
    }
})

window.addEventListener("resize", function(event) {
    if (window.innerWidth >= 768){
        menuMobile.classList.remove('show');
    }
});

