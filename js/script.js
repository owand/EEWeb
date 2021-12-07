
var meny = document.querySelector('.meny');
document.addEventListener('mousedown', function (e) {
   if (e.target.closest('.meny') === null) {
      meny.style.display = 'none';
   }
});