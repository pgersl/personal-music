const worksCategory = document.querySelectorAll('.works-category');
const findMeLinks = document.querySelectorAll('.find-me-links a');
const latestCards = document.querySelectorAll('.latest-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

worksCategory.forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 80}ms`);
  observer.observe(el);
});

findMeLinks.forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 100}ms`);
  observer.observe(el);
});

latestCards.forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 100}ms`);
  observer.observe(el);
});

const quote = document.querySelector('.quote-typewriter');
const author = document.querySelector('.quote-author');

const fullText = quote.textContent;
quote.textContent = '';

let index = 0;

function typeText() {
  if (index < fullText.length) {
    quote.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    quote.classList.add('is-done');
    setTimeout(() => {
      author.classList.add('is-visible');
    }, 300);
  }
}

const quoteObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText();
        quoteObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);

quoteObserver.observe(quote);