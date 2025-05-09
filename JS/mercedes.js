const imagePaths = [
    "../../media/pictures/cars/mercedes.png",
    "../../media/pictures/cars/backView/mercedesBackView.png",
    "../../media/pictures/cars/interiorPictures/mercedesInterior.jpg"
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = imagePaths.length - 1;
    } else if (currentIndex >= imagePaths.length) {
        currentIndex = 0;
    }

    const mainImage = document.getElementById("mainImage");
    mainImage.src = imagePaths[currentIndex];
}
