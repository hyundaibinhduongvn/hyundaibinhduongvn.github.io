
const input = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.product')];
if (input) {
  input.addEventListener('input', () => {
    const k = input.value.toLowerCase().trim();
    cards.forEach(card => {
      const t = card.dataset.name.toLowerCase();
      card.style.display = t.includes(k) ? 'block' : 'none';
    });
  });
}
