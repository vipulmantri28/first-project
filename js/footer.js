if (window.innerWidth < 1024) {
    const footerHeading = document.querySelectorAll('.footer__heading');
    
    footerHeading.forEach(heading => {
        heading.addEventListener('click', function() {
            heading.classList.toggle('active');
            const list = heading.nextElementSibling;
            if (list.style.maxHeight){
                list.style.maxHeight = null
            }else {
                list.style.maxHeight = list.scrollHeight + 'px';
            }
        })

    })
}