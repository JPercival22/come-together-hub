//   Modal toggle and background blur on click
var modal = document.querySelector('.modal');
var blur = document.getElementById('blur');

function toggleModal(e) {
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
}



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