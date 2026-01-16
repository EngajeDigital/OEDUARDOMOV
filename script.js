document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');
    const watchButtons = document.querySelectorAll('.watch');

    watchButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const videoId = card.getAttribute('data-video');
            
            // Ativa autoplay, mostra controles e garante que o MUTE está desativado
            const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&controls=1`;
            
            modalVideo.src = videoUrl;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });
    });

    const closeModal = () => {
        modal.style.display = 'none';
        modalVideo.src = ''; 
        document.body.style.overflow = 'auto'; 
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});
