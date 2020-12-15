import './css/styles.css';
import fetchImages from './js/apiService'
import addToMarkup from './js/addToMarkup'
import refs from './js/refs'

const API_KEY = "19534970-c150d60c17d66f9c0c2e6c44f";
// const baseURL = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12`;

// fetchImages('cat', 1, API_KEY)
let inputValue = '';
let page = 1;
refs.buttonRef.style.display = "none";
const getFormSubmit = (e) => {
    e.preventDefault();
    refs.galleryListRef.innerHTML = '';
    inputValue = e.target.elements.query.value;
    if (inputValue.length > 1) {
        fetchImages(inputValue, page, API_KEY).then(images => {
            console.log(images);
            addToMarkup(images);
        }).catch(error => console.log(error))

    }
    refs.buttonRef.style.display = "block";
}


const loadMoreImages = () => {
    page += 1;

    fetchImages(inputValue, page, API_KEY).then(images => {
        console.log(images);
        addToMarkup(images);
        window.scrollTo({
            top: document.documentElement.offsetHeight - 2500,
            behavior: 'smooth'
        });
    }).catch(error => console.log(error))

}


refs.formRef.addEventListener("submit", getFormSubmit)
refs.buttonRef.addEventListener("click", loadMoreImages)
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение(смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок

// const fetchImages = (query, page, API_KEY) => {
//     const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12`
//     fetch(URL).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         }
//     }).then(data => {
//         console.log(data);
//         return data.hits;
//     }).catch(error => console.log(error))

// }
