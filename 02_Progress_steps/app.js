const checkpoints = document.querySelectorAll('.checkpoint')
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const textSlide = document.querySelectorAll('.slide')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > checkpoints.length){
        currentActive = checkpoints.length
    }
    update()
    slideRight()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }
    update()
    slideLeft()
})

function update() {
    checkpoints.forEach((checkpoint, idx) => {
        if (idx < currentActive) {
            checkpoint.classList.add('active')
        } else {
            checkpoint.classList.remove('active')       
            
        }
    });
    
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (checkpoints.length - 1)) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === checkpoints.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

function slideRight() {    
    textSlide[currentActive - 1 ].classList.add('onn')
    textSlide[currentActive - 2 ].classList.remove('onn')
}

function slideLeft() {    
    textSlide[currentActive - 1 ].classList.add('onn')
    textSlide[currentActive].classList.remove('onn')
    textSlide[currentActive + 1 ].classList.remove('onn')
    textSlide[currentActive + 2 ].classList.remove('onn')
}