const API_KEY = '34956888-be40975c4ac5248dfcce26fa6';
const BASE_URL = 'pixabay.com/api';

function fetchPixabayImage(image, page) {
  return fetch(
    `https://${BASE_URL}/?q=${image}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(
        `Sorry, there are no images matching your search query ${image}. Please try again `
      )
    );
  });
}
const pixabayAPI = {
  fetchPixabayImage,
};
export default pixabayAPI;
