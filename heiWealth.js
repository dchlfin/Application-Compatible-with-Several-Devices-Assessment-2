const btn = document.getElementById('toggleNavBtn')
const nav = document.getElementById('nav')

btn.addEventListener("click", () => {
    nav.classList.toggle("open")
})
