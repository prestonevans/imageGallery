const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(image => image.classList.remove('cued-img'))
        image.classList.add('cued-img')
    })
})