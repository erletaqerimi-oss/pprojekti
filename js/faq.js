const faqItems = document.querySelectorAll('.EQ-faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.EQ-faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

