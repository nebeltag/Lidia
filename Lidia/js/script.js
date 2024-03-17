// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
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

const blockObserver = new IntersectionObserver(
  ([entry]) => {
    //console.log(entry);
    let h = entry.boundingClientRect.top;
    //console.log(h);
    if (!entry.isIntersecting) {
      header.classList.add('_fixed');
      page.classList.add('_fixed');
      //console.log("fixed");
    } else {
      header.classList.remove('_fixed');
      page.classList.remove('_fixed');
    }
  },
  {
    rootMargin: "-10px 0px 0px",
  }
)

document.querySelectorAll('.fictive').forEach((el) => blockObserver.observe(el));

