const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const indentationX = 100;
  let x = Math.floor(Math.random() * window.innerWidth) - indentationX;
  if (x > window.innerWidth - indentationX || x < indentationX) {
    x = (window.innerWidth - indentationX) / 2;
  }
  const indentationY = 50;
  let y = Math.floor(Math.random() * window.innerHeight ) - indentationY;
  if (y > window.innerHeight - indentationY || y < indentationY) {
    y = (window.innerHeight - indentationY) / 2;
  }
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener('click', () => {
  noBtn.style.display = 'none';
  const denyMsg = document.getElementsByClassName('msg-deny-invite')[0];
  denyMsg.style.display = 'block';
  const yesBtn = document.getElementById('yesBtn');
  yesBtn.style.width = '60%';
  yesBtn.style.borderRadius = '12px';
});