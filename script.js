const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.quiz-options button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.quiz-options button').forEach(item => item.classList.remove('correct', 'wrong'));
    const correct = button.dataset.correct === 'true';
    button.classList.add(correct ? 'correct' : 'wrong');
    document.querySelector('.quiz-result').textContent = correct
      ? '¡Correcto! Antes de cruzar: detente, observa y escucha.'
      : 'Inténtalo de nuevo. La prisa nunca debe guiarte cerca de las vías.';
  });
});

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = 'Gracias. Tu mensaje de demostración fue registrado.';
  event.currentTarget.reset();
});
