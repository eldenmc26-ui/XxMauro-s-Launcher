const modeButtons = [...document.querySelectorAll('.mode-btn')];
const body = document.body;
const eyebrow = document.getElementById('eyebrow');
const title = document.getElementById('screen-title');
const playButton = document.getElementById('play-btn');
const featureCard = document.getElementById('mode-feature-card');
const socialCard = document.getElementById('social-card');
const tip = document.getElementById('mode-account-tip');

const contentByMode = {
  minecraft: {
    eyebrow: 'Minecraft Mode',
    title: 'Gestione account e avvio',
    play: 'PLAY MINECRAFT',
    tip: 'Microsoft / Offline disponibile',
    featureTitle: 'Server Minecraft Community',
    featureText: 'Avvio rapido verso i server principali con profilo pre-selezionato.'
  },
  roblox: {
    eyebrow: 'Roblox Mode',
    title: 'Gestione account e social',
    play: 'PLAY ROBLOX',
    tip: 'Login Roblox obbligatorio',
    featureTitle: 'Esperienze Roblox Preferite',
    featureText: 'Apri al volo i tuoi giochi fissati e unisciti agli amici online.'
  }
};

function setMode(mode) {
  modeButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.mode === mode);
  });

  body.classList.toggle('theme-minecraft', mode === 'minecraft');
  body.classList.toggle('theme-roblox', mode === 'roblox');

  const content = contentByMode[mode];
  eyebrow.textContent = content.eyebrow;
  title.textContent = content.title;
  playButton.textContent = content.play;
  tip.textContent = content.tip;

  featureCard.querySelector('h3').textContent = content.featureTitle;
  featureCard.querySelector('p').textContent = content.featureText;

  socialCard.style.opacity = mode === 'roblox' ? '1' : '0.75';
}

modeButtons.forEach((btn) => {
  btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

setMode('minecraft');
