const searchButton = document.querySelector('.search-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');

searchButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
});

modalCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal--show');
});
