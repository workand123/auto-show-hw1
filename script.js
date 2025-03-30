function upDate(previewPic) {
    console.log("Mouse over:", previewPic.alt);

    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouse out: Resetting image");

    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
