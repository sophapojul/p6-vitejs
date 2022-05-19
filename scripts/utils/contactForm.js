/**
 * The function `displayModal()` gets the element with the id `contact_modal` and sets its `display`
 * property to `block`
 */
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

/**
 * When the user clicks the close button, the modal is hidden
 */
function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}
export { displayModal, closeModal };
