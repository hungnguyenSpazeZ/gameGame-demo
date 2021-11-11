const slider = document.querySelector('.slider');
const sliderMain = document.querySelector('.slider-main');
const sliderItems = document.querySelectorAll('.slider-main__item');
const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');
const dotItems = document.querySelectorAll('.slider-dots__item');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;
let positionX = 0;
let i = 0;

nextBtn.addEventListener('click', function() {
    handleChangeSlider(1)
    
})

prevBtn.addEventListener('click', function() {
    handleChangeSlider(-1)
})

function handleChangeSlider (direction) {
    if (direction === 1){
        // i++; //viet o day sai logic
                      
        if ( i >= sliderLength - 1) {
            i = sliderLength -1
            return
        };
        i++;  
        console.log(i)
        positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;       

    } else if (direction === -1 ) {
        // i--;//viet o day sai logic
        
        if ( i <= 0) {
            i = 0;
            return
        };
        i--;
        console.log(i)
        positionX = positionX + sliderItemWidth;       
        sliderMain.style = `transform: translateX(${positionX}px)`;       
    }
}

