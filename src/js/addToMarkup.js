import refs from './refs'
import imageCard from '../template/imageCard.hbs'

const updateMarkup = (images) => {
    let markup = imageCard(images);
    refs.galleryListRef.insertAdjacentHTML("afterbegin", markup)
}

export default updateMarkup;


