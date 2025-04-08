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

function addTabIndex() {
    console.log("Page loaded: Adding tabindex to images");

    let images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        // Таб индексін қосу және қолжетімділік үшін title атрибутын орнату
        images[i].setAttribute("tabindex", "0");
        images[i].setAttribute("title", images[i].alt); // Суреттердің title атрибуты да қолжетімділікті жақсартуға көмектеседі
    }
}
