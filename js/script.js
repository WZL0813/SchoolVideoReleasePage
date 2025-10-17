const modals = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const videoPlayer = document.querySelector('.video-player');

modals.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const videoCard = this.closest('.video-card');
        const videoUrl = videoCard.getAttribute('data-video-url');
        videoPlayer.src = videoUrl;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    videoPlayer.src = '';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
});