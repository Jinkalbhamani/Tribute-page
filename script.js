document.addEventListener('DOMContentLoaded', () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    const targets = document.querySelectorAll('.block, .homee-one, .homee-two, .homee-threee, .homee-three, .homee-four, .image-con');
    targets.forEach(target => {
      observer.observe(target);
    });
  });
  