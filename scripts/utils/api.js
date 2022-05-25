/**
 * It fetches the data from the photographers.json file, parses the data into JSON, and returns the
 * photographers array
 * @returns  {Promise.<Array.<{ name: string, id: number, city: string, country: string, tagline: string, price: number, portrait: string}>>}  An array of objects.
 */
const getPhotographers = async () => {
  const res = await fetch('api/photographers.json');
  const data = await res.json();
  const { photographers } = data;
  return photographers;
};
const getProductPhotographers = async () => {
  const res = await fetch('api/photographers.json');
  const data = await res.json();
  const { media } = data;
  return media;
};
export { getPhotographers, getProductPhotographers };
