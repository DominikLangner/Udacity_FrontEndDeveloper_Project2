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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  createNav();
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//Select all Sections & extraxt Name (=data-nav) & anker:
function createNav() {
  var sectionData = document.querySelectorAll("section");
  sectionData.forEach((element) => {
    var name = element.getAttribute("data-nav");
    var anker = element.id;

    // create <li>
    var navElement = document.createElement("li");
    navElement.innerText = name;

    //add class name (to style it) and id:
    navElement.classList.add("menu__link");
    navElement.setAttribute("target-id", anker);

    // add eventListener
    /*   navElement.addEventListener("click", function () {
      console.log("Klick auf " + anker);
    }); */

    navElement.addEventListener("click", scrollIntoView);

    //select Nav-Menu and add new element:
    const navMenu = document.querySelector("ul");
    navMenu.appendChild(navElement);
  });
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTo event

function scrollIntoView(event) {
  var x = event.target.getAttribute("target-id");
  console.log(x);
  document.getElementById(x).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
