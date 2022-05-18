/**
 * It takes an object as an argument and returns an object with two properties:
 *
 * data: the object passed as an argument
 * getUserCardDOM: a function that returns a DOM element
 * @param   {Object} data - the data object that will be used to create the photographer object
 * @returns   {Object} An object with two properties: data and getUserCardDOM.
 */
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;
  /**
   * It creates a DOM element for a user card.
   * @returns the article element.
   */
  function getUserCardDOM() {
    const article = document.createElement('article');
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
      tagName,
      text = '',
      attributValue = {},
      className = '',
      tagParent = article
    ) {
      const elt = document.createElement(tagName);
      elt.textContent = text;
      Object.entries(attributValue).forEach(([key, value]) => {
        elt.setAttribute(key, value);
      });
      elt.className = className;
      tagParent.appendChild(elt);
    }
    createElement('img', '', { src: picture });
    createElement('h2', name);
    createElement('div', `${city}, ${country}`);
    createElement('p', tagline);
    createElement('span', `${price}€/jour`);
    return article;
  }
  return {
    data,
    getUserCardDOM
  };
}
export default photographerFactory;
