document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('educationModal');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalInstitute = document.getElementById('modalInstitute');
    const modalDescription = document.getElementById('modalDescription');

    if (!modal || !modalClose || !modalImage || !modalTitle || !modalInstitute) {
        console.error('Modal elements are not found');
        return;
    }


    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            console.log('Card clicked');
            const image = this.getAttribute('data-image');
            const title = this.querySelector('.card-title').innerText;
            const institute = this.querySelector('.card-institute').innerText;

            modalImage.src = image;
            modalTitle.innerText = title;
            modalInstitute.innerText = institute;

            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
