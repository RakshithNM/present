const previous = document.getElementById('previous');
const next = document.getElementById('next');

document.addEventListener('keydown', e => {
  if(previous && e.keyCode === 37) {
    previous.click();
  }
  if(next && e.keyCode ===  39) {
    next.click();
  }
});
