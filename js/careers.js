const jobItems = document.querySelectorAll('.EQ-job-item');

jobItems.forEach(item => {
    const title = item.querySelector('.EQ-job-title');
    title.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
