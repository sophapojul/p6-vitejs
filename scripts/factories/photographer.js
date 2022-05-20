/**
 * It creates an element, sets its text content, sets its attributes, sets its class name, and
 * appends it to a parent element
 * @param   {String}  tagName - the name of the tag you want to create.
 * @param   {String}  text - the text content of the element
 * @param   {Object}  attributValue - an object containing the attributes and their values
 * @param   {String}  className - the class name of the element
 * @param   {HTMLElement} tagParent - the parent element of the element to be created
 */
function createElement(
  tagParent,
  tagName,
  text = '',
  attributValue = {},
  className = ''
) {
  const elt = document.createElement(tagName);
  elt.textContent = text;
  Object.entries(attributValue).forEach(([key, value]) => {
    elt.setAttribute(key, value);
  });
  elt.className = className;
  tagParent.appendChild(elt);
}
/**
 * It takes an object as an argument and returns an object with two properties:
 *
 * data: the object passed as an argument
 * getUserCardDOM: a function that returns a DOM element
 * @param   {{ name: string, id: number, city: string, country: string, tagline: string, price: number, portrait: string}} data - the data object that will be used to create the photographer object
 * @typedef  {Object} Object
 * @property  {Object} data - the object
 * @property  {function} getUserCardDOM - a function that returns a DOM element
 * @return   {Object} An object with two properties: data and getUserCardDOM.
 */
function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/images/${portrait}`;
  /**
   * It creates a DOM element for a user card.
   * @returns  {HTMLElement} the article element.
   */
  function getUserCardDOM() {
    const article = document.createElement('article');
    createElement(article, 'img', '', { src: picture, id });
    createElement(article, 'h2', name);
    createElement(article, 'div', `${city}, ${country}`);
    createElement(article, 'p', tagline);
    createElement(article, 'span', `${price}€/jour`);
    const img = article.firstElementChild;
    const openWindow = () => window.open('photographer.html', '_blank');
    img.addEventListener('click', openWindow);
    return article;
  }
  return {
    data,
    getUserCardDOM
  };
}
export { photographerFactory, createElement };
