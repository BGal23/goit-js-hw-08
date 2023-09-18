import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const fotoList = document.querySelector(".gallery");

const addFotoList = galleryItems.map(foto => `
    <li class="gallery__item">
        <a class="gallery__link" href=${foto.original}>
            <img class="gallery__image" 
            src=${foto.preview} 
            alt=${foto.description}/>
        </a>
    </li>
`).join(" ") //----Nie dodawałem <div> </div> bo coś nieładnie to wyglądało----

fotoList.insertAdjacentHTML("afterbegin", addFotoList) 

const modalFoto = new SimpleLightbox(".gallery__link", {
    captionsData: 'alt',
    captionDelay: 250,
});
