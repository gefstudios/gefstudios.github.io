const PRIVACY_HASHES = ['#privacy', '#privacyDeliverySort', '#privacyBotaoCup'];

export function toggleModal(modalId: string, show: boolean): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (show) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
    return;
  }

  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 300);
  document.body.style.overflow = '';

  if (PRIVACY_HASHES.includes(window.location.hash)) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

export function initModalControls(): void {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const openTrigger = target.closest<HTMLElement>('[data-modal]');
    const closeTrigger = target.closest<HTMLElement>('[data-close-modal]');

    if (openTrigger) {
      event.preventDefault();
      const modalId = openTrigger.dataset.modal;
      if (modalId) toggleModal(modalId, true);
      return;
    }

    if (closeTrigger) {
      const modalId = closeTrigger.dataset.closeModal;
      if (modalId) toggleModal(modalId, false);
    }
  });
}

export function checkPrivacyHash(): void {
  const hash = window.location.hash;

  if (hash === '#privacy') {
    toggleModal('general-modal', true);
    return;
  }

  if (hash === '#privacyDeliverySort') {
    toggleModal('delivery-modal', true);
  }

  if (hash === '#privacyBotaoCup') {
    toggleModal('botao-modal', true);
  }
}
