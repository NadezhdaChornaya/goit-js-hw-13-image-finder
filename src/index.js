import './css/styles.css';
import fetchImages from './js/apiService'
import addToMarkup from './js/addToMarkup'
import refs from './js/refs'

const API_KEY = "19534970-c150d60c17d66f9c0c2e6c44f";

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

