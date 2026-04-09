const screenElements = Array.from(document.querySelectorAll('[data-screen]'));
const gotoButtons = Array.from(document.querySelectorAll('[data-goto]'));
const chips = Array.from(document.querySelectorAll('.chip'));
const flowButtons = Array.from(document.querySelectorAll('.flow-map .link-btn'));
const tiltCards = Array.from(document.querySelectorAll('.food-card'));
const dishCards = Array.from(document.querySelectorAll('.selectable-dish'));
const actionButtons = Array.from(document.querySelectorAll('[data-action]'));
const detailTitle = document.getElementById('detailTitle');
const detailPrice = document.getElementById('detailPrice');
const detailDesc = document.getElementById('detailDesc');
const detailRating = document.getElementById('detailRating');
const dishSelectionStatus = document.getElementById('dishSelectionStatus');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartStatus = document.getElementById('cartStatus');

let selectedDish = {
  name: 'Classic Burger Deluxe',
  price: '$8.99',
  rating: '4.8',
  desc: 'Juicy beef patty, cheddar cheese, lettuce, tomato and signature sauce.'
};

function updateDetailContent() {
  if (!detailTitle || !detailPrice || !detailDesc || !detailRating) {
    return;
  }

  detailTitle.textContent = selectedDish.name;
  detailPrice.textContent = selectedDish.price;
  detailDesc.textContent = selectedDish.desc;
  detailRating.textContent = `${selectedDish.rating} Rating`;
}

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

  flowButtons.forEach((btn) => {
    btn.classList.toggle('is-current', btn.dataset.goto === targetId);
  });

  if (targetId === 'detail') {
    updateDetailContent();
  }

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

dishCards.forEach((card) => {
  card.addEventListener('click', () => {
    dishCards.forEach((item) => item.classList.remove('is-selected'));
    card.classList.add('is-selected');

    selectedDish = {
      name: card.dataset.name || selectedDish.name,
      price: card.dataset.price || selectedDish.price,
      rating: card.dataset.rating || selectedDish.rating,
      desc: card.dataset.desc || selectedDish.desc
    };

    if (dishSelectionStatus) {
      dishSelectionStatus.textContent = `Selected dish: ${selectedDish.name}`;
    }
    if (cartStatus) {
      cartStatus.textContent = '';
    }
  });
});

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { action } = button.dataset;
    if (action === 'profile' && dishSelectionStatus) {
      dishSelectionStatus.textContent = 'Profile screen is not included in this prototype flow yet.';
    }
  });
});

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    if (cartStatus) {
      cartStatus.textContent = `${selectedDish.name} added to cart successfully.`;
    }
  });
}

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;
    card.style.transform = `translateY(-2px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

showScreen('welcome');
updateDetailContent();
