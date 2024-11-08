const leftbtn = document.querySelector(".leftbtn");
const rightbtn = document.querySelector(".rightbtn");
const background = document.querySelector(".background");
const sliderContainer = document.querySelector(".slider-container");

const allImgCont = document.querySelectorAll(".imgcont");

let actSlide = 0;

setBgBody();

rightbtn.addEventListener("click", () => {
	actSlide++;

	if (actSlide > allImgCont.length - 1) {
		actSlide = 0;
	}
	setBgBody();
	setActiveSlide();
});

leftbtn.addEventListener("click", () => {
	actSlide--;

	if (actSlide < 0) {
		actSlide = allImgCont.length - 1;
	}
	setBgBody();
	setActiveSlide();
});

function setActiveSlide() {
	allImgCont.forEach((slide) => slide.classList.remove("active"));
	allImgCont[actSlide].classList.add("active");
}

function setBgBody() {
	background.style.backgroundImage = allImgCont[actSlide].style.backgroundImage;
}
