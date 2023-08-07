// Dropdown
const dropdown = document.querySelectorAll(".nav__dropdown")
const dropdownOpen = document.querySelectorAll(".nav__dropdown__open")
const dropdownMenu = document.querySelectorAll(".nav__dropdown__menu")

for (let d = 0; d < dropdownMenu.length; d++) {
  dropdownUse(dropdownMenu[d], dropdownMenu[d].children)
}
for (let i = 0; i < dropdown.length; i++) {
  dropdownOpen[i].onclick = () =>{
    dropdown[i].classList.toggle("nav__dropdown__show")
  }
}
function dropdownUse(dropdownMenu, dropdownItems) {
  let drHeight = []

  for (let i = 0; i < dropdownItems.length; i++) {
    drHeight.push(dropdownItems[i].clientHeight)
  }
  let result = drHeight.reduce((sum, current) => sum + current)

  dropdownMenu.style = `--h: ${result}px;`
}

// Navbar
const burger_btn = document.querySelector(".burger__btn")
const burger_btnClose = document.querySelector(".burger__close")
const nav = document.querySelector(".navbar")
const navClose = document.querySelector(".navbar__close")

burger_btn.onclick = () =>{
  nav.classList.add("navbar__show")
  navClose.style = "opacity: 1;"
  navClose.classList.add("navbar__close__show")
}
burger_btnClose.onclick = BurgerClose
navClose.onclick = BurgerClose

function BurgerClose() {
  nav.classList.remove("navbar__show")
  // dropdown.classList.remove("nav__dropdown__show")
  navClose.style = "opacity: 0;"
  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].classList.remove("nav__dropdown__show")
  }
  setTimeout(() => {
    navClose.classList.remove("navbar__close__show")
  }, 300);
}

// Scroll
let last_known_scroll_position = 0;
let ticking = false;

const navbar__mobile = document.querySelector(".navbar__mobile")

function doSomething(scroll_pos) {
  console.log(scroll_pos)
  if (scroll_pos > 100) {
    navbar__mobile.classList.add("navbar__scrolled")
  } else {
    navbar__mobile.classList.remove("navbar__scrolled")
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});