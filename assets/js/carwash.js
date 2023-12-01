//letiable

let totalLength = 464.76;
let goUp = document.getElementById('go-up');
let loader = document.getElementById('loadingSpinner');
let progressTexts = document.querySelectorAll('.progress-text');
let progressSection = document.querySelector('#progress-section');
let progressCircles = document.querySelectorAll('.progress-circle');
let dropdowns = document.querySelectorAll('.nav-item.dropdown');
let body = document.querySelector('body');
let animationStarted = false;

// Load Screen

window.addEventListener('load', ()=> {
  setTimeout(function () {
    loader.style.opacity = '0';
    loader.classList.add('invisible');
    body.classList.remove('overflow-hidden');
    if (window.innerWidth < 991){
      nav.classList.add('bg-black');
    }
  },2000);
});


// Checks if the SVG Section is Shown on the Screen

function init() {
  let rect = progressSection.getBoundingClientRect();
  return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

let initV = init();

// Start SVG Animation When User Enter The Section

let observer = new IntersectionObserver(function (e) {
  e.forEach(function (entry) {
    if (entry.isIntersecting && !animationStarted) {
      if (initV) {
        setTimeout(startAnimation, 2000);
      } else {
        startAnimation();
      }
      animationStarted = true;
      observer.unobserve(progressSection);
    }
  });
});

observer.observe(progressSection);

//start Counter + Color Animation

function startAnimation() {
  progressCircles.forEach(function (progressCircle, index) {
    let targetPercent = parseInt(progressTexts[index].textContent.replace('%', ''));
    let currentPercent = 0;

    let interval = setInterval(function () {
      if (currentPercent < targetPercent) {
        currentPercent++;
        let offset = totalLength * ((100 - currentPercent) / 100);
        progressCircle.setAttribute('stroke-dashoffset', offset);
        progressTexts[index].textContent = `${currentPercent}%`;
      } else {
        clearInterval(interval);
      }
    }, 50);
  });
}

// Go Up Button

goUp.addEventListener('click', ()=> {
  window.scrollTo(0, 0);
});

// The button is displayed when the user scrolls down 20% of the window's height (100vh).

window.addEventListener('scroll', ()=> {
  if (window.scrollY > window.innerHeight * 0.2) {
    goUp.style.cssText = 'display: block;';
  } else {
    goUp.style.cssText = 'display: none;';
  }
});

// Make the menu of the Dropdown work With Hover and Click
function Dropdowns() {
  if (window.innerWidth > 991) {
    console.log('Dropdowns function called');
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

      dToggle.addEventListener('click', (e)=> {
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
Dropdowns();
window.addEventListener('resize', Dropdowns);


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

window.addEventListener('scroll',()=>{
});