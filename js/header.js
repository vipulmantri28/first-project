const menuList = document.querySelector('.menu__list');
function toggle(isOpen) {
  isOpen ? menuList.classList.add('menu--show') : menuList.classList.remove('menu--show');
}
function dropDown(target) {
  if (window.innerWidth < 1023) {
    const targetParent = target.parentElement
    const subMenu = targetParent.querySelector('.menu__subItem')
    const drpDwn = targetParent.querySelector('.drop_down')
    if (subMenu.classList.contains('subItem--show')) {
      subMenu.classList.remove('subItem--show')
      drpDwn.classList.remove('rotate');
    }else {
      subMenu.classList.add('subItem--show');
      drpDwn.classList.add('rotate');
    }
  }
  
}