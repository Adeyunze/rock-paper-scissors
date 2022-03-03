const rules = document.querySelector('.rules');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close')

rules.addEventListener('click', () => {
    modal.classList.add('active');
    rules.classList.add('active');
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    rules.classList.remove('active');
})