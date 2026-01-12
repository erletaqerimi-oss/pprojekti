const faqItems = document.querySelectorAll('.faq-item');

// Add click event to toggle "active" class
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
