const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const gridsquare = document.createElement('div');
  gridsquare.classList.add('grid-square');
  container.appendChild(gridsquare);
}