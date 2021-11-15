//   Modal toggle 

var modal = document.querySelector('.modal');
var blur = document.getElementById('blur');
function toggleModal(e) {
  modal.classList.toggle('active');
  
//  document.querySelectorAll('.editorial-card').style = "filter:blur(10px);";
  overlay.classList.toggle('active');
}
// function openModal() {
//   modal.style = "display:flex;";
// };

// function closeModal() {
//   modal.style = "display:none;";
  // overlay.style = "filter:blur(1rem);";
// };


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