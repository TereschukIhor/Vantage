document.querySelector('.header-btn').onclick = menu;
const link = document.querySelectorAll('.header-link')

for (let i = 0; i < link.length; i++) {
    link[i].onclick = menu;
}

function menu() {
    document.querySelector('.headar-nav').classList.toggle('active')
}