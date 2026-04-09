const screenElements = Array.from(document.querySelectorAll('[data-screen]'));
const gotoButtons = Array.from(document.querySelectorAll('[data-goto]'));
const chips = Array.from(document.querySelectorAll('.chip'));

function showScreen(targetId) {
  const targetScreen = screenElements.find((screen) => screen.id === targetId);

  if (!targetScreen) {
    if (targetId === 'styleguide') {
      document.getElementById('styleguide')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  screenElements.forEach((screen) => {
    screen.classList.toggle('is-visible', screen.id === targetId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

gotoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.goto;
    chips.forEach((chip) => chip.classList.remove('is-active'));

    if (targetId === 'styleguide') {
      document.querySelector('.chip[data-goto="styleguide"]')?.classList.add('is-active');
    } else {
      document.querySelector('.chip[data-goto="welcome"]')?.classList.add('is-active');
    }

    showScreen(targetId);
  });
});

showScreen('welcome');
