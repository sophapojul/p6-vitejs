import '../../css/style.scss';
import { displayModal, closeModal } from '../utils/contactForm';

const openBtn = document.querySelector('.photograph-header .contact_button');
const closeImg = document.querySelector('.modal img');

openBtn.addEventListener('click', displayModal);
closeImg.addEventListener('click', closeModal);
