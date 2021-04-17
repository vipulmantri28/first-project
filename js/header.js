const sliderNav = document.querySelector('.navigation__slider');
function slide(isOpen) {
  isOpen ? sliderNav.classList.add('isShown') : sliderNav.classList.remove('isShown');
}
window.addEventListener('click', slide(false))
function dropDown(target) {
    const targetParent = target.parentElement
    if (targetParent.classList.contains('active')) {
      targetParent.classList.remove('active')
    }else {
      targetParent.classList.add('active');
    }
  
}