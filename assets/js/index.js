//letiable
let goUp = document.getElementById('go-up');
let loader = document.getElementById('loadingSpinner');
let dropdowns = document.querySelectorAll('.nav-item.dropdown');
let nav = document.querySelector('.navbar');
let range = document.getElementById('range');
let body = document.querySelector('body');

// Load Screen

window.addEventListener('load', ()=> {
  setTimeout(function () {
    loader.style.opacity = '0';
    loader.classList.add('invisible');
    body.classList.remove('overflow-hidden');
    if (window.innerWidth < 991){
      nav.classList.add('bg-black');
    }
    else{
      
    }
  },2000);
});

// Go Up Button

goUp.addEventListener('click', ()=> {
    window.scrollTo(0, 0);
});

// The button is displayed when the user scrolls down 20% of the window's height (100vh).

window.addEventListener('scroll', ()=> {
    if (window.scrollY > range.offsetTop) {
        goUp.style.cssText = 'display: block;';
    } else {
        goUp.style.cssText = 'display: none;';
    }
});

// Make the menu of the Dropdown work With Hover and Click
function Dropdowns() {
  if (window.innerWidth > 991) {
    dropdowns.forEach(function (dropdown) {
      let dToggle = dropdown.querySelector('.navbar .dropdown-toggle');
      let ddM = dropdown.querySelector('.dropdown-menu');
      let isOpen = false;

      function openDropdown() {
        ddM.classList.add('show');
        isOpen = true;
      }

      function closeDropdown() {
        ddM.classList.remove('show');
        isOpen = false;
      }

      dToggle.addEventListener('mouseover', ()=> {
        if (!isOpen) {
          openDropdown();
        }
      });

      dropdown.addEventListener('mouseleave', ()=> {
        if (isOpen) {
          closeDropdown();
        }
      });

      dToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (isOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });
    });
  }
}
window.addEventListener('resize', Dropdowns);
Dropdowns();

//dropdown color
window.addEventListener('scroll',()=>{
  if (window.innerWidth > 991){
  if(window.scrollY > range.offsetTop){
    nav.classList.add('bg-black');
  }
  else{
    nav.classList.remove('bg-black');
  }
}});