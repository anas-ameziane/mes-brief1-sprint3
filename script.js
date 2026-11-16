const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */


  async function fetchData() { try { const response = await fetch("https://countries.dev/countries");
    if (response.ok) {
      allCountries = await response.json();
      allCountries.forEach((country) => {
        createCountryCard(country);
      });
    } else {
      console.error("Erreur lors de la récupération des pays");
    }
  } catch (error) {
    console.error(error);
  }
}
/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */

function createCountryCard(country) {
    const section = document.getElementById("section");
    section.classList.add("countries-grid");
    const card = document.createElement("div");
    card.classList.add("country-card");
    const img = document.createElement("img");
    img.classList.add("country-flag");
    const content = document.createElement("div");
    content.classList.add("country-content");
    const title = document.createElement("h3");
    title.classList.add("country-name");
    const capitale = document.createElement("p");
    capitale.classList.add("country-info");
    const capitalValue = document.createElement("span");
    capitalValue.classList.add("country-value");
    const Population = document.createElement("p");
    Population.classList.add("country-info");
    const populationValue = document.createElement("span");
    populationValue.classList.add("country-value");
    img.src = country.flags.png ;
    img.alt = `Drapeau de ${country.name.common}`;
    title.textContent = country.name.common;
    capitale.textContent = "Capitale";
    capitalValue.textContent = country.capital 
    Population.textContent = "Population";
    populationValue.textContent = country.population
    capitale.append(capitalValue);
    Population.append(populationValue);
    content.append(title, capitale, Population);
    card.append(img, content);
    section.append(card);
}


/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
const filtreContinent = document.getElementById("filtre-continent");
const filtreRecherche = document.getElementById("filtre-recherche");
function filterCountries() {
  const selectedContinent = document.getElementById("filtre-continent").value;
  const searchText = document.getElementById("filtre-recherche").value.toLowerCase();
  if ( selectedContinent === "Tous") {
    displayCountries(allCountries);
  } if (selectedContinent === "Afrique") {
    const filteredCountries = allCountries.filter((country) => country.region === "Africa");
    displayCountries(filteredCountries);
  } if (selectedContinent === "Asia") {
    const filteredCountries = allCountries.filter((country) => country.region === "Asia");
    displayCountries(filteredCountries);
  } if (selectedContinent === "Europe") {
    const filteredCountries = allCountries.filter((country) => country.region === "Europe");
    displayCountries(filteredCountries);
  } if (selectedContinent === "Americas") {
    const filteredCountries = allCountries.filter((country) => country.region === "Americas");
    displayCountries(filteredCountries);
  } if (selectedContinent === "Oceania") {
    const filteredCountries = allCountries.filter((country) => country.region === "Oceania");
    displayCountries(filteredCountries);
  }
  
  
}
filtreContinent.addEventListener("change", filterCountries);

// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}
fetchData();
init();
