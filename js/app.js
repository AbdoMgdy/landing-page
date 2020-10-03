/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navList = document.querySelector("#navbar__list");

const docSections = document.querySelectorAll("section");

const navListFrag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const buildListItem = (item) => {
  const newLi = document.createElement("li");
  const itemName = item.getAttribute("data-nav");
  newLi.innerHTML = `<a class="menu__link" href="#${item.id}">${itemName}</a>`;
  return newLi;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
const buildNav = () => {
  docSections.forEach((sec) => {
    const listItem = buildListItem(sec);
    navListFrag.appendChild(listItem);
  });
  navList.appendChild(navListFrag);
};

// Add class 'active' to section when near top of viewport
const observeSections = () => {
  let options = {
    threshold: 0.5,
  };
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("your-active-class");
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove("your-active-class");
      }
    });
  }, options);
  docSections.forEach((sec) => {
    observer.observe(sec);
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Begin Observation
observeSections();
