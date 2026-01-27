const pars = document.querySelectorAll('.bio-text p');

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

pars.forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 80}ms`);
  observer.observe(el);
});