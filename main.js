// DOM elements 
const elFilmsList = document.querySelector(".js-films-list");
const elFilmsTemplate = document.querySelector(".js-films-template").content;


const filmsDocumentFragment = document.createDocumentFragment();

for (const film of films) {

    const filmsTemplateNodes = elFilmsTemplate.cloneNode(true);
    filmsTemplateNodes.querySelector(".films-poster").src = film.poster;
    filmsTemplateNodes.querySelector(".film-title").textContent = film.title;
    filmsTemplateNodes.querySelector(".film-realese-date").textContent = film.release_date;
    filmsTemplateNodes.querySelector(".film-summary").textContent = film.overview;

    filmsDocumentFragment.appendChild(filmsTemplateNodes);

};

elFilmsList.appendChild(filmsDocumentFragment);