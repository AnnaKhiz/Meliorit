const sectionAfterHelp = document.getElementById('sectionAfterHelp')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      const container = document.querySelector('.main__help-container');
      if (!container) return false;

      const intersectionInnerElements = [...container.children];
      intersectionInnerElements.forEach(block => block.classList.add('animated'));
    }
  })

});

observer.observe(sectionAfterHelp)
