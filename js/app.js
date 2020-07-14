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

// Define Global Variables
var sections;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  sections = document.querySelectorAll("section");
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
  sections.forEach((element) => {
    var name = element.getAttribute("data-nav");
    var anker = element.id;

    // create <li>
    var navElement = document.createElement("li");
    navElement.innerText = name;

    //add class name (to style it) and id:
    navElement.classList.add("menu__link");
    navElement.setAttribute("target-id", anker);

    navElement.addEventListener("click", scrollIntoView);

    //select Nav-Menu and add new element:
    const navMenu = document.querySelector("ul");
    navMenu.appendChild(navElement);
  });
}

// Add class 'active' to section when near top of viewport

// googled that one, got the idea to use .getBoundingClientRect,
// window.innerHeight & document.documentElement.clientHeight from:
//https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433

function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  var navMenHeight = document
    .querySelector(".page__header")
    .getBoundingClientRect().height;
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom - navMenHeight > 0
  );
}

// Set sections as active

// this eventListener checks if any of the document's section is in viewport,
// if yes it calls the function "set_active_section" with the section's id as parameter.

document.addEventListener("scroll", function () {
  for (var el of sections) {
    if (isInViewport(el)) {
      set_active_section(el.id);
      break;
    }
  }
});

/* this function selects all sections and uses a for loop to go 
through the sections one by one and compares the section id to 
the active-id (=the section in viewport) */

function set_active_section(active_id) {
  //set section in view to active:
  for (var el of sections) {
    if (el.id == active_id) {
      el.classList.add("your-active-class");
      //remove active-class from sections not in view:
    } else {
      el.classList.remove("your-active-class");
    }
  }
  //set navigation menu <li> elements'class
  var nav_elements = document.querySelectorAll(".menu__link");
  for (var el of nav_elements) {
    if (el.getAttribute("target-id") == active_id) {
      el.classList.add("active");
    } else el.classList.remove("active");
  }
}

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
