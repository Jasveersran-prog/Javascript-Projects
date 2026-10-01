/*
JavaScript Lightbox Gallery
*/

// Get the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

// Open the lightbox
function openLightbox(image) {

```
// Display the lightbox
lightbox.style.display = "flex";

// Put the clicked image into the lightbox
lightboxImage.src = image.src;

// Display the image description
lightboxCaption.textContent = image.alt;
```

}

// Close the lightbox
function closeLightbox() {

```
lightbox.style.display = "none";

lightboxImage.src = "";
```

}

// Close the lightbox when the user clicks outside the image
lightbox.addEventListener("click", function(event) {

```
if (event.target === lightbox) {
    closeLightbox();
}
```

});

// Close the lightbox when the Escape key is pressed
document.addEventListener("keydown", function(event) {

```
if (event.key === "Escape") {
    closeLightbox();
}
```

});
