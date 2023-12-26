const moreDiv = document.querySelector('.more');
const addDivstoMore = (more) => {
  moreDiv.innerHTML = '';
  for (let i = more.length - 1; i >= 0; i--) {
    const newDiv = document.createElement('div');
    newDiv.textContent = more[i];
    moreDiv.appendChild(newDiv);
  }
};
const makeInvisible = () => {
  const Divs = document.querySelectorAll('nav>div');
  const InvisibleDivs = [];
  for (const div of Divs) {
    div.className = 'item';
    if (!div.previousElementSibling) {
      continue;
    }
    if (div.offsetLeft <= Divs[0].offsetLeft && div.nextElementSibling) {
      div.classList.add('invisible');
      InvisibleDivs.push(div.textContent);
    }
    if (!div.nextElementSibling && div.offsetLeft <= Divs[0].offsetLeft) {
      for (let i = 5; i > 0; i--) {
        if (Divs[i].classList.contains('invisible') === false) {
          Divs[i].classList.add('invisible');
          InvisibleDivs.push(Divs[i].textContent);
          break;
        }
      }
    }
  }
  addDivstoMore(InvisibleDivs);
};
const observer = new ResizeObserver(() => {
  makeInvisible();
});
const nav = document.querySelector('nav');
observer.observe(nav);
const moreBtn = document.querySelector('.moreBtn');
moreBtn.addEventListener('click', () => {
  if (document.querySelector('.more div:nth-child(1') !== null) {
    moreDiv.classList.toggle('visible');
  }
});
