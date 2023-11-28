let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
updateSlide(0);

function updateSlide(n){
  slideIndex = n
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    if(i == n){
      slides[i].style.display = "block";
    }
  }
}

function changeSlide(d){
  slideIndex += d + slides.length;
  slideIndex %= slides.length;
  console.log(slideIndex)
  updateSlide(slideIndex);
}