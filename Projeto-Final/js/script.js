
document.addEventListener('scroll', e => {
    let footerSize = (25 * window.scrollY) / document.body.clientHeight;
    
    footer.style.width = footerSize + '%'

    if (window.scrollY > 120) {
        header.style.display = 'none';
    }

    if (window.scrollY < 120) {
        header.style.display = 'inline-block';
    }
    
})

