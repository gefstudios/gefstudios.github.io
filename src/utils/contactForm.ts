export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
  const successMessage = document.getElementById('success-message');

  if (!form || !submitBtn || !successMessage) return;

  const resetButton = (): void => {
    submitBtn.disabled = false;
    submitBtn.innerText = 'TRANSMITIR SINAL';
    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = 'TRANSMITINDO...';
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const result = await response.json();

        if (response.status === 200) {
          form.classList.add('hidden');
          successMessage.classList.remove('hidden');
          successMessage.classList.add('flex');
          form.reset();
          return;
        }

        console.log(result);
        alert(`Falha na transmissão: ${result.message}`);
        resetButton();
      })
      .catch((error) => {
        console.log(error);
        alert('Erro de conexão ao transmitir o sinal.');
        resetButton();
      });
  });
}
