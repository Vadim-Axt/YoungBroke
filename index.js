


const block1 = document.getElementById("block-1")
const block2 = document.getElementById("block-2")
const block3 = document.getElementById("block-3")
const backBtn = document.getElementById("back-btn")
const title = document.getElementById("yab")
const aboutUs = document.getElementById("about-us")
const cite = document.getElementById("cite")
const firstBlock = document.getElementById("first-block")

function active() {
    firstBlock.classList.toggle("active")
    block1.classList.toggle("active")
    block2.classList.toggle("active")
    block3.classList.toggle("active")
    backBtn.classList.toggle("active");
    title.classList.toggle("active");
    aboutUs.classList.toggle("active");
    cite.classList.toggle("active");
}

block1.addEventListener("click", (event) => {
    active()
})
backBtn.addEventListener("click", () => active())

