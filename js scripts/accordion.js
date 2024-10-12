let items = document.querySelectorAll(".accordeonItem")

items.forEach(el => {
    el.addEventListener('click', () => {
        let body = el.querySelector(".body")
        body.classList.toggle("show")
        el.querySelector("button").classList.toggle("button")
        el.querySelector(".box").classList.toggle("show")
        el.querySelector(".head").classList.toggle("show")

    })
});
