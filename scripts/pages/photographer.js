import '../../css/style.scss';
import { displayModal, closeModal } from '../utils/contactForm';
import getPhotographers from '../utils/api';
import { photographerFactory } from '../factories/photographer';

const openBtn = document.querySelector('.photograph-header .contact_button');
const closeImg = document.querySelector('.modal img');

openBtn.addEventListener('click', displayModal);
closeImg.addEventListener('click', closeModal);

const displayPhotograph = (photographer) => {
  const photographHeader = document.querySelector('.photograph-header');
  const photographModel = photographerFactory(photographer);
  const userCardDOM = photographModel.getUserCardDOM();
  photographHeader.appendChild(userCardDOM);
};
const getPhotograph = (arr, val) => {
  arr.filter((el) => el.id === val);
};

(async () => {
  const photographers = await getPhotographers();
  const photograph = await getPhotograph(photographers);
  displayPhotograph(photograph);
})();
