const imagePaths = [
    "../../media/pictures/cars/audi.png",
    "../../media/pictures/cars/backView/audiBackView.jpg",
    "../../media/pictures/cars/interiorPictures/audiInterior.png"
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
