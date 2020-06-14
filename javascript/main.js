
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
let navClose = document.querySelector('.menu-close');
let servicesOpen = document.querySelector('.navigation-5');

// SERVICES
let servicesClose = document.querySelector('.services-1');
let services = document.querySelector('.services');

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
});

// LIST OF SERVICES
let servicesList = document.querySelector('.services-list').children;
console.log(servicesList)

let servicesDetail = document.querySelector('services-3').children;
console.log(servicesDetail)

