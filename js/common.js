let body = document.body;
let theme = document.querySelector('.theme')
let bars = document.querySelector('.bars')
let ul = document.querySelector('nav ul')
let toTop = document.getElementById('top')

if (JSON.parse(localStorage.getItem("mode"))) {
    body.classList.add("dark");
} else {
    body.classList.remove("dark");
}

let darkMode = false
theme.addEventListener('click' , ()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        theme.innerHTML = '<i class="fa-solid fa-sun"></i>'
        darkMode = true
    }else{
        theme.innerHTML = '<i class="fa-solid fa-moon"></i>'
        darkMode = false
    }
    localStorage.setItem("mode" , JSON.stringify(darkMode))
})

bars.addEventListener('click' , ()=>{
    ul.classList.toggle('open')
    bars.classList.toggle('close')
    if (ul.classList.contains('open')) {
        bars.innerHTML = '<i class="fa-solid fa-close close"></i>'
    }else{
        bars.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
})

toTop.addEventListener('click' , ()=>{
    window.scrollY = 0
})