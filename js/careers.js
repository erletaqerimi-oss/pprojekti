// Select all job items
const jobItems = document.querySelectorAll('.job-item');

// Toggle "active" class on click
jobItems.forEach(item => {
    const title = item.querySelector('.job-title');
    title.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
