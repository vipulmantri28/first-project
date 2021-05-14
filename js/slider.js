const slider = {
    init: function() {
        const sliderWrapper = document.querySelectorAll('.collection__item');
        let currItem;
        sliderWrapper.forEach(item => {
            if(item.classList.contains('current')) {
                currItem = item;
            }
        })
        console.log(sliderWrapper);
        console.log(currItem);

    }
}