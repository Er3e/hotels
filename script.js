var currentIndex = 0;

function changeSlide(n){
   var slides = document.getElementsByClassName('slide-wrapper')
   switch (currentIndex + n){
      case -1 : currentIndex = slides.length-1; break;
      case slides.length : currentIndex = 0; break;
      default : currentIndex += n; break;
   }
   for (var i = 0; i < slides.length; i++){
      slides[i].classList.add('hiden');
   }
   slides[currentIndex].classList.remove('hiden');
}