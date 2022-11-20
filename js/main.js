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
});