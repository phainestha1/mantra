const body = document.querySelector("body");
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
];

body.style.background = 
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))";


function handleImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const width = window.innerWidth;
    const height = window.innerHeight;
    body.style.background = `url(../image/${chosenImage}) no-repeat`;
    body.style.backgroundSize = `${width + 10}px ${height + 10}px `;
};
    
handleImage();
window.addEventListener("resize", handleImage);