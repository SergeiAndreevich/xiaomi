// $(function(){
//     $('.bike-slider').slick({
//         // arrows: false;
//         // dots: true;
//         });
// });
window.addEventListener('DOMContentLoaded', ()=>{
    //slider
    const slides = document.querySelectorAll('.bike-slider__item'),
        prevBtn = document.querySelector('.bike__prev'),
        nextBtn = document.querySelector('.bike__next'),
        numberOfSlides = slides.length;
    let currentPage = 0;
   

    function hide(item){
        item.classList.add('hide');
        item.classList.remove('active');
    }
    function show(item){
        item.classList.add('active');
        item.classList.remove('hide');
    }

    function hideBikeSlides(){
        slides.forEach(item =>{
            hide(item);
        });
        show(slides[0]);
        currentPage = 0;
        // slides[0].classList.add('active');
        // slides[0].classList.remove('hide');
    }
    hideBikeSlides();

    function hideAllSlides(){
        slides.forEach(item => {
            hide(item);
        });
    }

    function changeSlide(){
        prevBtn.addEventListener('click', () => {
            if(currentPage <= 0){
                currentPage = numberOfSlides-1;
                hideAllSlides();
                show(slides[currentPage]);
            } else{
                hideAllSlides();
                show(slides[--currentPage]);
            };
        });
        nextBtn.addEventListener('click', () =>{
            if(currentPage >= numberOfSlides-1){
                currentPage = 0;
                hideAllSlides();
                show(slides[currentPage]);
            }else{
                hideAllSlides();
                show(slides[++currentPage])
            };
        });
    }
    changeSlide();

// slider 2
    
    const leftButtons = document.querySelectorAll('.slider__btn'),
        sliderImages = document.querySelectorAll('.slider__item'),
        buttonsArea = document.querySelector('.slider__btns');
    let counter = 0;

    function addActiveBtn(number){
        leftButtons.forEach(button => button.classList.remove('red'));
        leftButtons[number].classList.add('red');
    }

    //console.log(leftButtons);

    function changeByButton(){
        buttonsArea.addEventListener('click', (e) => {
            //console.log(e.target);
            if(e.target === leftButtons[0]){
                counter = 0;
                addActiveBtn(counter);
                autoFillClass(counter);
            } else if(e.target === leftButtons[1]){
                counter = 1;
                addActiveBtn(counter);
                autoFillClass(counter);
            } else if(e.target === leftButtons[2]){
                counter = 2;
                addActiveBtn(counter);
                autoFillClass(counter);
            }
        });
    }

    function autoFillClass(number){
        sliderImages.forEach(slide => {
            slide.classList.remove('activated');
            slide.classList.add('hidden');
        });
        sliderImages[number].classList.add('.activated');
        sliderImages[number].classList.remove('hidden');
    }
    changeByButton();

    //теперь нужно добавить таймер
    function checkOrder(){
        if(counter > 2){
            counter = 0;
            // addActiveBtn(counter);
            // autoFillClass(counter)
        }
    }
    setInterval(autoPlaySlider, 5000);

    function autoPlaySlider(){
        ++counter;
        checkOrder();
        addActiveBtn(counter);
        autoFillClass(counter);
    }
});