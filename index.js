


const block1 = document.getElementById("block-1")
const block2 = document.getElementById("block-2")
const block3 = document.getElementById("block-3")
const backBtn = document.getElementById("back-btn")
const title = document.getElementById("yab")
const aboutUs = document.getElementById("about-us")
const cite = document.getElementById("cite")
const firstBlock = document.getElementById("first-block")
const secondBlock = document.getElementById("second-block")
const thirdBlock = document.getElementById("third-block")


function mainActive() {
    block1.classList.toggle("active")
    block2.classList.toggle("active")
    block3.classList.toggle("active")
    backBtn.classList.toggle("active");
    title.classList.toggle("active");
    aboutUs.classList.toggle("active");
    cite.classList.toggle("active");
}
function backActive() {
    firstBlock.classList.add("active");
    secondBlock.classList.add("active");
    thirdBlock.classList.add("active");
    mainActive()
}

function active1() {
    firstBlock.classList.toggle("active")
    mainActive()
}

function active2() {
    secondBlock.classList.toggle("active")
    mainActive()
}
function active3() {
    thirdBlock.classList.toggle("active")
    mainActive()
}

block1.addEventListener("click", (event) => active1())
backBtn.addEventListener("click", () => backActive())
block2.addEventListener("click", () => active2())
block3.addEventListener("click", () => active3())
