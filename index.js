


const block1 = document.getElementById("block-1")
const block2 = document.getElementById("block-2")
const block3 = document.getElementById("block-3")
const backBtn = document.getElementById("back-btn")
const title = document.getElementById("yab")
const aboutUs = document.getElementById("about-us")
const cite = document.getElementById("cite")



block1.addEventListener("click", (event) => {
    active()
})
function active() {
    backBtn.classList.toggle("active");
    title.classList.toggle("active");
    aboutUs.classList.toggle("active");
    cite.classList.toggle("active");
}
active();