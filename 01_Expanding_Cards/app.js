const card = document.querySelectorAll('.panel')

card.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
});

function removeActiveClass() {
    card.forEach(panel => {
        panel.classList.remove('active')
    });
    
}