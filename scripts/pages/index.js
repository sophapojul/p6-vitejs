import '../../css/style.scss';
import { photographerFactory } from '../factories/photographer';
import { getPhotographers } from '../utils/api';

/**
 * It takes an array of photographer objects, loops through them, creates a photographer model for each
 * one, and then appends the DOM element for each photographer model to the DOM
 * @param  {Array.<{ name: String, id: Number, city: String, country: String, tagline: String, price: Number, portrait: String}>} photographers - This is the array of photographer objects that we get from the API.
 */
const displayData = async (photographers) => {
  const photographersSection = document.querySelector('.photographer_section');
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

/**
 * It fetches the data from the API, then displays it on the page
 */
(async () => {
  const photographers = await getPhotographers();
  displayData(photographers);
})();

// init();
