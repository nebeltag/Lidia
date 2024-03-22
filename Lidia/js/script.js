/*const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc')
};*/




// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto], .upbtn[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelectorAll(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock[0].getBoundingClientRect().top + pageYOffset
      - document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();
  }
}

//header animation with Intersection Observer


const header = document.querySelector('.header');
const page = document.querySelector('.page');
const fictive = document.querySelector('.fictive');

// let bodyMobileWidth = () => {
//   if (document.body.clientWidth < 479.98) {
//     fictive.style.display = "none";
//   } else {
//     fictive.style.display = "block";
//   }
// }

// window.addEventListener('resize', bodyMobileWidth);


const blockObserver = new IntersectionObserver(

  ([entry]) => {
    if (!entry.isIntersecting) {
      header.classList.add('_fixed');
      page.classList.add('_fixed');
    } else {
      header.classList.remove('_fixed');
      page.classList.remove('_fixed');
    }
  },
  {
    rootMargin: "-20px 0px 0px",
  }
)

blockObserver.observe(fictive);


// Up button animation with Intersection Observer

const buttonUp = document.querySelector(".upbtn");
const heroBlock = document.querySelector(".hero");

const heroObserver = new IntersectionObserver(

  ([entry]) => {
    if (!entry.isIntersecting) {
      buttonUp.classList.add('_show');
    } else {
      buttonUp.classList.remove('_show');
    }
  },
)

heroObserver.observe(heroBlock);


