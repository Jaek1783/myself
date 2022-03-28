slideUp();
function slideUp(){
  let slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIndex = 0,
        slideCount = slide.length,
        slideWidth = 150,
        slideMargin = 8,
        prevBtn = document.querySelector('.right'),
        nextBtn = document.querySelector('.left');

  makeClone();

  function makeClone(){
    for(var i=0; i<slideCount; i++){
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slides.appendChild(cloneSlide);
    }
    for(var i = slideCount -1; i>=0; i--){
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    },100);

  }
  function updateWidth(){
    const currentSlides = document.querySelectorAll('.slides li');
    const newSlideCount = currentSlides.length;
    // console.log(newSlideCount);
    const newWidth = (slideWidth+slideMargin)*newSlideCount + 'px';
    slides.style.width = newWidth;
  }
  function setInitialPos(){
    var intialTranslateValue = -(slideWidth+slideMargin)*slideCount;
    slides.style.transform = 'translateX('+intialTranslateValue+'px)'
  }
  // nextBtn.addEventListener('click',function(){
  //   moveSlide(currentIndex+1);
  // });
  // prevBtn.addEventListener('click',function(){
  //   moveSlide(currentIndex-1);
  // });
  let timer = undefined;
  function autoSlide(){
    if(timer == undefined){
      timer = setInterval(function(){
        moveSlide(currentIndex+1);
      },3000);
    }
  }
  autoSlide();
  function moveSlide(num){
    slides.style.left = -num * (slideWidth+slideMargin) + 'px';
    currentIndex = num;
    // console.log(currentIndex, -slideCount);
    if(currentIndex == slideCount){
      setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left = '0px'
        currentIndex = 0;
      },500);
      setTimeout(function(){
        slides.classList.add('animated');
      },600);
    }
    if(currentIndex == -slideCount){
      setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left = '0px'
        currentIndex = 0;
      },500);
      setTimeout(function(){
        slides.classList.add('animated');
      },600);
    }
  }

}

slideDown();
function slideDown(){
  let slides = document.querySelector('.slidesDown'),
        slide = document.querySelectorAll('.slidesDown li'),
        currentIndex = 0,
        slideCount = slide.length,
        slideWidth = 150,
        slideMargin = 8,
        prevBtn = document.querySelector('.right'),
        nextBtn = document.querySelector('.left');

  makeClone();

  function makeClone(){
    for(var i=0; i<slideCount; i++){
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slides.appendChild(cloneSlide);
      // console.log(slides);
    }
    for(var i = slideCount -1; i>=0; i--){
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    },100);

  }
  function updateWidth(){
    const currentSlides = document.querySelectorAll('.slidesDown li');
    const newSlideCount = currentSlides.length;
    // console.log(newSlideCount);
    const newWidth = (slideWidth+slideMargin)*newSlideCount + 'px';
    slides.style.width = newWidth;
  }
  function setInitialPos(){
    var intialTranslateValue = -(slideWidth+slideMargin)*slideCount;
    slides.style.transform = 'translateX('+intialTranslateValue+'px)'
  }
  let timer = undefined;
  function autoSlide(){
    if(timer == undefined){
      timer = setInterval(function(){
        moveSlide(currentIndex-1);
      },3000);
    }
  }
    autoSlide();
  function moveSlide(num){
    slides.style.left = -num * (slideWidth+slideMargin) + 'px';
    currentIndex = num;
    // console.log(currentIndex);
    if(currentIndex == slideCount){
      setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left = '0px'
        currentIndex = 0;
      },500);
      setTimeout(function(){
        slides.classList.add('animated');
      },600);
    }
    if(currentIndex == -slideCount){
      setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left = '0px'
        currentIndex = 0;
      },500);
      setTimeout(function(){
        slides.classList.add('animated');
      },600);
    }
  }
}
