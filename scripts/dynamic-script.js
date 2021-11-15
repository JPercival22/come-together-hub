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