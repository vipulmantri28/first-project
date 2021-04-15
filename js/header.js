const menu = document.querySelector('.menu');
function toggle(isOpen) {
  isOpen ? menu.classList.add('menu--show') : menu.classList.remove('menu--show');
}
function dropDown(target) {
    const targetParent = target.parentElement
    if (targetParent.classList.contains('active')) {
      targetParent.classList.remove('active')
    }else {
      targetParent.classList.add('active');
    }
  
}