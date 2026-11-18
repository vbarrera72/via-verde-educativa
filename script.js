const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
}));

document.querySelectorAll('.quiz button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.quiz button').forEach(x => x.classList.remove('correct','wrong'));
    const correct = button.dataset.correct === 'true';
    button.classList.add(correct ? 'correct' : 'wrong');
    document.querySelector('.quiz-result').textContent = correct
      ? '¡Correcto! Detente, observa y escucha antes de cruzar.'
      : 'Respuesta incorrecta. Cerca de la vía, la prisa aumenta el riesgo.';
  });
});

document.querySelector('#login-form')?.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.querySelector('.status').textContent =
    'Acceso de demostración: este formulario académico no almacena credenciales.';
});

document.querySelector('#contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.querySelector('.status').textContent =
    'Gracias. Tu mensaje de demostración fue registrado.';
  e.currentTarget.reset();
});