import '../../css/style.scss';
import { displayModal, closeModal } from '../utils/contactForm';

document
  .querySelector('.photograph-header .contact_button')
  .addEventListener('click', displayModal);

document.querySelector('.modal img').addEventListener('click', closeModal);
