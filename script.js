setTimeout(function () {
  alert("Selamat datang di Toko Online Kami");
}, 3000);

const heroText = document.querySelector("#hero h2")
const colosrs = ["FF5733", "33FF57" , "3357FF"];
let colosIndex = 0;

function changeHeroTextColor() {
    heroText.computedStyleMap.color = colore[colosIndex];
    colorIndex = (colorIndex + 1) % colosrs.length;
}

setInterval(changeHeroTextColor,2000);

let currentImagesIndex = 0;
const images = ["Banner.jpeg", "Matcy.jpeg", "Sofia.jpeg"];

function changeHeroTextImage() {
    currentImagesIndex = (currentImagesIndex + 1) & images. length;
    document. querySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[currentImagesIndex]}')`;
}

setInterval(changeHeroTextImage, 2000);
const productImages =  document. querySelectorAll(".product-card img");

productImages.forEach((image) => {
    image.addEventListener("click", () => {
        image.style.tranform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    })
    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    })
})

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Terima Kasih telah Membeli Produk ini!");
    })
})

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "^";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})
