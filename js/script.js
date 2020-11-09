"use strict";

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('.header__menu').addEventListener('click',function() {
        document.querySelector('.header__row').classList.toggle('_active');
        document.querySelector('.header__nav').classList.toggle('_active');
        this.classList.toggle('_active');
        document.body.classList.toggle('_no-scroll');
    });

    const sliderInner = document.querySelector('.three__slider'),
          slides = document.querySelectorAll('.three__item'),
          prev = document.querySelector('.prev1'),
          next = document.querySelector('.next1'),
          width = window.getComputedStyle(slides[0]).width,
          widthNum = width.slice(0,width.length-2);
    let offset = 0;

    function nextSlides() {
        if(offset == +width.slice(0,width.length -2) * (slides.length - 3)){
            offset = 0;
        }else{
            offset += +width.slice(0,width.length -2);

        }
       
        sliderInner.style.transform = `translateX(-${offset}px)`;
    }
    function prevSlides(){
        if( offset == 0){
            offset = +width.slice(0,width.length -2) * (slides.length - 3);
        }else{
            offset -= +width.slice(0,width.length -2);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;
    }
    next.addEventListener('click',nextSlides);
    prev.addEventListener('click',prevSlides);

    let mc = new Hammer(sliderInner);
    mc.get('swipe').set({
    direction: Hammer.DIRECTION_ALL,
    threshold: 1, 
    velocity:0.1
    });

       mc.on("swipeleft",nextSlides);
       mc.on("swiperight",prevSlides);
 

    const slides2 = document.querySelectorAll('.autor__info'),
          prev2 = document.querySelector('.prev2'),
          next2 = document.querySelector('.next2');
    let slideIndex = 0;
        showSlides(slideIndex);

        function showSlides(n){
            if(n > slides2.length){
                slideIndex = 1;
            }
            if(n < 1){
                slideIndex = slides2.length;
            }
            slides2.forEach(item => item.classList.add('hide'));
            slides2[slideIndex - 1].classList.remove('hide');
        }

        function plusSlides(n){
            showSlides(slideIndex += n);
        }
            prev2.addEventListener('click',function(){
                plusSlides(-1);
            });
     


            next2.addEventListener('click',function(){
                plusSlides(1);
            });

       /* scroll Animation */
   const animItems = document.querySelectorAll('._beatiful');

   if (animItems.length > 0){
       window.addEventListener('scroll', animOnScroll);
       function animOnScroll() {
           for (let i = 0; i < animItems.length; i++){
               const animItem = animItems[i],
                     animItemHeight = animItem.offsetHeight,
                     animItemOffset = offsets(animItem).top,
                     animStart = 4;
   
               let animItemPoint = window.innerHeight - animItemHeight / animStart;
               if (animItemHeight > window.innerHeight) {
                   animItemPoint = window.innerHeight - window.innerHeight / animStart;
               }
   
               if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                   animItem.classList.add('_ani');
               } else {
                   if(!animItem.classList.contains('_beatiful-no')){
                       animItem.classList.remove('_ani');
                   }
                    
                   /*анимация будет скролл по снизу и по верху \\animItem.classList.remove('_active');*/
               }
           }
       }
       function offsets(el) {
           const rect = el.getBoundingClientRect(),
                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
           return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
       }
       setTimeout(()=>{
           animOnScroll();
       },700);
       
   }
   
   /* scroll Animation------------------------------- */
});
		

       
