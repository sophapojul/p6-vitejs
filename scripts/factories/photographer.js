let WindowObjectReference = null;
/**
 * If the window is already open, focus on it. If it's not open, open it
 * @param  {String} strUrl - The URL of the page to open in the new window.
 * @param  {String} val - the id of the image to be displayed
 */
function openWindow(strUrl, val) {
  const urlPhotograph = new URL(strUrl, window.location.href);
  urlPhotograph.search = `?id=${val}`;
  // || WindowObjectReference.location.search !== paramsPhotograph
  if (
    WindowObjectReference == null ||
    WindowObjectReference.closed ||
    !Object.values(WindowObjectReference.location).includes(
      `${urlPhotograph.search}`
    )
  ) {
    /* si le pointeur vers l'objet window n'existe pas, ou s'il existe
           mais que la fenêtre a été fermée */
    WindowObjectReference = window.open(urlPhotograph);
  } else {
    WindowObjectReference.focus();
  }
}
/**
 * It creates an element, sets its text content, sets its attributes, sets its class name, and
 * appends it to a parent element
 * @param   {Element} tagParent - the parent element of the element to be created
 * @param   {String}  tagName - the name of the tag you want to create.
 * @param   {String}  [text=''] - the text content of the element
 * @param   {String}  [className=''] - the class name of the element
 * @param   {Object}  [attributValue={}] - an object containing the attributes and their values
 * @param   {string}  [attributValue.src] - source of the image
 * @param   {string}  [attributValue.alt] - alternative text of the image
 * @param   {string}  [attributValue.role] - Aria role
 * @param   {Boolean} [attributValue.controls] - to allow the user to control video playback, including volume, seeking, and pause/resume playback.
 * @param   {*}  [attributValue.id] - Element's id
 */
function addElement(
  tagParent,
  tagName,
  text = '',
  className = '',
  attributValue = {}
) {
  const elt = document.createElement(tagName);
  elt.textContent = text;
  Object.entries(attributValue).forEach(([key, value]) =>
    elt.setAttribute(key, value)
  );
  elt.className = className;
  return tagParent.appendChild(elt);
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
    addElement(article, 'img', null, 'article-img', { src: picture, id });
    addElement(article, 'h2', name, 'article-title');
    addElement(article, 'div', `${city}, ${country}`, 'article-location');
    addElement(article, 'p', tagline, 'article-tagline');
    addElement(article, 'span', `${price}€/jour`, 'article-price');
    const img = article.firstElementChild;
    const photographPathName = 'photographer.html';
    img.addEventListener('click', () => {
      const photographId = this.data.id;
      openWindow(photographPathName, photographId);
    });
    return article;
  }
  function getOneUserCardDOM() {
    const section = document.createElement('section');
    const div = addElement(section, 'div', null, 'bio');
    addElement(div, 'h2', name, 'section-title');
    addElement(div, 'div', `${city}, ${country}`, 'section-location');
    addElement(div, 'q', tagline, 'section-tagline');
    addElement(section, 'button', 'Contactez-moi', 'contact_button', {
      role: 'button'
    });
    addElement(section, 'img', null, 'section-img', {
      src: picture,
      alt: name,
      id
    });
    return section;
  }
  return {
    data,
    getUserCardDOM,
    getOneUserCardDOM
  };
}
const main = document.querySelector('main');
const mainSection = addElement(main, 'section', null, 'photograph-product');
/**
 * It takes in an object, and returns an object with a method that returns a DOM element
 * @param   {Object} data - This is the data that we're going to use to create the productPhotographerFactory.
 * @returns an object with two properties. The first property is the data that was passed into the
 * function. The second property is a function that returns a DOM element.
 */
function productPhotographerFactory(data) {
  const { id, photographerId, title, image, video, likes } = data;
  const heart = `assets/images/heart.svg`;
  const product = `assets/images/${photographerId}/${image}`;
  const media = `assets/images/${photographerId}/${video}`;
  /**
   * It creates a DOM element for a product card
   * @returns  {HTMLElement} The article element.
   */
  function getProductUserCardDOM() {
    const article = addElement(mainSection, 'article', null, 'product');
    if (data.video) {
      addElement(article, 'video', null, 'product-video', {
        controls: true,
        src: media
      });
    } else {
      addElement(article, 'img', null, 'product-img', {
        src: product,
        alt: title,
        id
      });
    }
    const footer = addElement(article, 'footer', null, 'product-footer');
    addElement(footer, 'p', title, 'product-title');
    addElement(footer, 'span', likes, 'product-likes');
    addElement(footer, 'img', null, 'product-heart', {
      role: 'img',
      src: heart
    });
    return article;
  }
  return { data, getProductUserCardDOM };
}
export { photographerFactory, addElement, productPhotographerFactory };
