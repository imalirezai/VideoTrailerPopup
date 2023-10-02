const btnEl = document.querySelector('.btn')
const closeIcon = document.querySelector('.close-icon')

const trailerContainerEl = document.querySelector('.trailer-container')
const videoEl = document.querySelector('video')

btnEl.addEventListener("click", function () {
    trailerContainerEl.classList.remove('active')
})

closeIcon.addEventListener("click", function () {
    trailerContainerEl.classList.add("active"
    videoEl.pause()
    videoEl.currentTime = 0
})

