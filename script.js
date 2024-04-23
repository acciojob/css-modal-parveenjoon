//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener for openModalBtn click
    openModalBtn.addEventListener('click', openModal);

    // Event listener for closeModalBtn click
    closeModalBtn.addEventListener('click', closeModal);

    // Event listener to close modal when clicked outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});