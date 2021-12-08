
var menuCheckbox = document.getElementById('menu-check');
var menuItems = document.querySelectorAll('.category-list li');

// close hamburger menu after click a
for (var i = 0; i < menuItems.length; ++i) {
   menuItems[i].addEventListener('click', function (e) {
      menuCheckbox.click();
   })
};
