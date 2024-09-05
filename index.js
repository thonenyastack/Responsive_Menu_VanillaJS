
const getHtmlElement = (element) => {
    const elm = document.getElementById(element);
    return elm;
}

const openBtn = getHtmlElement("menu-btn");
const exitBtn = getHtmlElement("exit-btn");
const nav = getHtmlElement("nav");

openBtn.addEventListener("click", () => {
    console.log("Open Btn Clicked")
    nav.classList.add("open-nav");
})

exitBtn.addEventListener("click", () => {
    console.log("Close Btn Clicked");
    nav.classList.remove("open-nav");
})