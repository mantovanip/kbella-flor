(() => {
  const SESSION_KEY = 'kbella-mantovanisys-offer-seen';
  const DELAY = 6000;
  const MANTOVANI_WA = '5548999557822';

  if (sessionStorage.getItem(SESSION_KEY)) return;

  const message = 'Olá! Vi o site demonstrativo da Kbella Flor e gostaria de saber mais sobre o site profissional por R$ 420.';
  const whatsappUrl = `https://wa.me/${MANTOVANI_WA}?text=${encodeURIComponent(message)}`;

  const modal = document.createElement('div');
  modal.className = 'ms-offer';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="ms-offer__backdrop" data-ms-close></div>
    <section class="ms-offer__card" role="dialog" aria-modal="true" aria-labelledby="msOfferTitle">
      <button class="ms-offer__close" type="button" aria-label="Fechar oferta" data-ms-close>×</button>
      <span class="ms-offer__kicker">PROJETO DEMONSTRATIVO • MANTOVANISYS</span>
      <h2 id="msOfferTitle">Gostou deste site?</h2>
      <p class="ms-offer__intro">Tenha um site profissional como este para apresentar seu negócio e facilitar o contato com seus clientes.</p>
      <div class="ms-offer__price"><del>R$ 697</del><strong>R$ 420</strong></div>
      <p class="ms-offer__includes"><strong>Domínio próprio + hospedagem por 1 ano inclusos.</strong></p>
      <a class="ms-offer__cta" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">QUERO MEU SITE →</a>
      <small class="ms-offer__note">Oferta da MantovaniSys. Não se refere aos produtos da Kbella Flor.</small>
    </section>`;

  document.body.appendChild(modal);

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('ms-offer-open');
  };

  modal.addEventListener('click', (event) => {
    if (event.target.closest('[data-ms-close]')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) close();
  });

  window.setTimeout(() => {
    sessionStorage.setItem(SESSION_KEY, '1');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('ms-offer-open');
    modal.querySelector('.ms-offer__close')?.focus();
  }, DELAY);
})();