// Menu Toggle
const toggleMenu = document.getElementsByClassName('nav-toggle')[0];
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0];

toggleMenu.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})

function toggleNav() {
    document.body.classList.toggle('activeNav');
}

//   Modal toggle 

var modal = document.querySelector('.modal');

function openModal () {
  modal.style = "display:flex;";
};

function closeModal () {
  modal.style = "display:none;";
};


// debugging section 
// Debug Code to find elements causing horizontal scroll 
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
document.querySelectorAll('*'),
function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
}
);
// end of debug code
// });