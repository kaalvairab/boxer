
// BACKGROUND IMAGE ON LANDING PAGE
let landingImages = [
  "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];
var i = 0;
const slide = () => {
  document.getElementById('landing').style.backgroundImage = 'url(' + landingImages[i] + ')';
  i++;
  if (i == landingImages.length) {
    i = 0;
  }

  setTimeout(function () { slide(); }, 4000);
}


// SELECTORS
// Landing PAGE
let navigation = document.querySelector('.navigation');
let landing = document.querySelector('.landing');
let navOpen = document.querySelector('.menu');


//NAVIGATION PAGE
let navClose = document.querySelector('.navigation-6');
let servicesOpen = document.querySelector('.navigation-5');
let aboutOpen = document.querySelector('.navigation-4');
let peopleOpen = document.querySelector('.navigation-3');

// SERVICES
let servicesClose = document.querySelector('.services-1');
let services = document.querySelector('.services');
let servicesContactOpen = document.getElementById('services-contact');


// ABOUT
let about = document.querySelector('.about');
let aboutClose = document.querySelector('.about-1');
let aboutContactOpen = document.getElementById('about-contact');

// PEOPLE
let people = document.querySelector('.people');
let peopleClose = document.querySelector('.people-1');

// CONTACT
let contact = document.querySelector('.contact');
let contactClose = document.querySelector('.contact-1')

// GLOBAL FUNCTION
const showHide = (hide, show) => {
  hide.style.display = "grid";
  show.style.display = "none";

}


// NAVIGATION OPEN
navOpen.addEventListener('click', e => {
  showHide(navigation, landing);
});
//NAVIRATION CLOSE
navClose.addEventListener('click', e => {
  showHide(landing, navigation);
});


// SERVICES OPEN
servicesOpen.addEventListener('click', e => {
  showHide(services, navigation);
});
// SERVICES CLOSE
servicesClose.addEventListener('click', e => {
  showHide(navigation, services);
  showHide(navigation, landing);
});

// Contact from Services
servicesContactOpen.addEventListener('click', e => {
  showHide(contact, services);
})

// LIST OF SERVICES

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab(evt, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("services-description");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("services-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}

// ABOUT
// OPEN
aboutOpen.addEventListener('click', e => {
  showHide(about, navigation);
});

// CLOSE
aboutClose.addEventListener('click', e => {
  showHide(navigation, about);
  showHide(navigation, landing);
});

// CONTACT in ABOUT
aboutContactOpen.addEventListener('click', e => {
  showHide(contact, about);
});


// PEOPLE
// OPEN
peopleOpen.addEventListener('click', e => {
  showHide(people, navigation);
});

// CLOSE
peopleClose.addEventListener('click', e => {
  showHide(navigation, people);
  showHide(navigation, landing);
});


// CONTACT
// Contact Close
contactClose.addEventListener('click', e => {
  showHide(navigation, contact);
  showHide(navigation, landing);
  showHide(navigation, services);
  showHide(navigation, about);
});




