document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const modal = document.getElementById('notionModal');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');
  const closeModalButton = document.querySelector('.close-modal-btn');

  // Open Modal Function
  const openModal = () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close Modal Function
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Event Listeners for Opening Modal
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Event Listener for Closing Modal Button
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  // Close Modal when clicking outside the dialog window
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close Modal on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Smooth Scroll for internal hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
