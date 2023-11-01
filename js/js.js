document.addEventListener('DOMContentLoaded', function () {
    const text = "Привет! Добро пожаловать в мир моих творческих подвигов. Здесь вы окунетесь в вихрь моих работ, и кто знает, может именно здесь начнется наша совместная веб-авантюра!";
    const textElement = document.getElementById('typed-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Скорость печати (50 миллисекунд между символами)
        }
    }

    setTimeout(typeText, 1000); // Запустить печать через 1 секунду
});



const showMenuButton = document.getElementById("show_menu");
const hideMenuButton = document.getElementById("hide_menu");
const nav = document.querySelector("nav");
const headerBody = document.querySelector(".header_body");
const headerClose = document.querySelector(".header_close");

showMenuButton.addEventListener("click", function () {
    nav.style.display = "none"; // Скрываем nav
    headerBody.style.display = "none"; // Скрываем .header_body
    headerClose.style.display = "grid"; // Отображаем .header_close
});

hideMenuButton.addEventListener("click", function () {
    nav.style.display = "flex"; // Отображаем nav
    headerBody.style.display = "flex"; // Отображаем .header_body
    headerClose.style.display = "none"; // Скрываем .header_close
});



showMenuButton.addEventListener("click", function () {
    nav.style.opacity = 0; // Устанавливаем прозрачность nav в 0
    headerBody.style.opacity = 0; // Устанавливаем прозрачность .header_body в 0
    headerClose.style.display = "grid"; // Отображаем .header_close
});

hideMenuButton.addEventListener("click", function () {
    nav.style.opacity = 1; // Устанавливаем прозрачность nav в 1
    headerBody.style.opacity = 1; // Устанавливаем прозрачность .header_body в 1
    headerClose.style.display = "none"; // Скрываем .header_close
});