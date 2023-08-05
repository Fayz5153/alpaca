// Dropdown
const dropdown = document.querySelector(".nav__dropdown")
const dropdownMenu = document.querySelectorAll(".nav__dropdown__menu")
const dropdownItems = document.querySelectorAll(".nav__dropdown__menu li")
console.log(dropdownItems[0].clientHeight * dropdownItems.length)

dropdown.onclick = () =>{
  dropdown.classList.toggle("nav__dropdown__show")
  dropdownMenu.style = `--h:dropdownItems[0].clientHeight * dropdownItems.length`
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
  navClose.style = "opacity: 0;"
  setTimeout(() => {
    navClose.classList.remove("navbar__close__show")
  }, 300);
}