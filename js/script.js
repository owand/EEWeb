
var menuCheckbox = document.getElementById('menu-check');
var menuItems = document.querySelectorAll('.category-list li');

CloseMenu();

function CloseMenu() {
   if (window.innerWidth <= 900) {
      for (var i = 0; i < menuItems.length; ++i) {
         menuItems[i].addEventListener('click', function (e) {
            menuCheckbox.click();
         })
      }
   }
}


