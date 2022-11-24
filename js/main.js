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
    //show(slides[2]);

    // console.log(currentPage);
    // nextBtn.addEventListener('click', () => {
    //     slides.forEach(item => hide(item));
    //     show(slides[currentPage++]);
    // });

// slider 2
    const sliderBtns = document.querySelector('.slider__btns'), 
        buttons = sliderBtns.querySelectorAll('.slider__btn'),
        sliders = document.querySelectorAll('.slider__item'),
        count = 0;

    function addActiveBtn(number){
        buttons.forEach(btn => btn.classList.remove('red'))
        buttons[number].classList.add('red');
    }
    function hideAllSlides(){
        sliders.forEach(item => {
            item.classList.remove('active');
            item.classList.add('hide');
        });
    }

    function swipeSlideByBtn(){
        sliderBtns.addEventListener('click', (e)=>{
            if(e.target == buttons[0]){
                addActiveBtn(0);
                hideAllSlides();
                sliders[0].classList.add('active');
                count = 0;
            } else if( e.target == buttons[1]){
                addActiveBtn(1);
                hideAllSlides();
                sliders[1].classList.add('active');
                count = 1;
            } else if(e.target == buttons[2]){
                addActiveBtn(2);
                hideAllSlides();
                sliders[2].classList.add('active');
                count = 2;
            }
        });
    }
    swipeSlideByBtn();

    function showDetermineSlide(numb){
        hideAllSlides();
        addActiveBtn(numb);
        sliders[numb].classList.add('active');
    }

    function autoSwipe(){
       //узнаем у кого active  и передвигаем следующему
        ++count;
        if (count >=2){
            count = 0;
            showDetermineSlide(count);
        }
    }
    setTimeout(autoSwipe, 1000);
    
});