function upDate(previewPic) {
    console.log("Hover or focus:", previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouse leave or blur: Resetting image");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Мұнда суретті көрсету үшін, төмендегі суреттің үстіне апарыңыз.";
}

// Функция: Барлық суреттерге tabindex атрибутын автоматты түрде қосу
function addTabIndex() {
    console.log("Page loaded: Adding tabindex to images");

    let images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
