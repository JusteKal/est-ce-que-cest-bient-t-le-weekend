function mardi() {
    const date = new Date();
    const dayOfWeek = date.getDay(); 
    const lundi = document.getElementById('lundi');
    const autresJours = document.getElementById('autreJours'); 
    const videoContainer = document.getElementById('video-container');
    const video = videoContainer.querySelector('video');

    
    if (dayOfWeek === 2) {
        videoContainer.style.display = 'block';
        video.setAttribute('autoplay', true); 
        video.play(); 
    } else {
        videoContainer.style.display = 'none';
        video.removeAttribute('autoplay'); 
        video.pause(); 
        video.currentTime = 0; 
    }

    if (dayOfWeek === 1) {
        lundi.innerHTML = 'Nous ne sommes que lundi mais reste fort';
        lundi.classList.add('lundi');
    } else if (dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) {
        autresJours.innerHTML = "C'est bientôt le weekend :D";
        autresJours.classList.add('autresJours');
    } else {
        autresJours.innerHTML = "C'est déjà le weekend ! Pourquoi tu demandes ?";
        autresJours.classList.add('autresJours');
    }
}

document.addEventListener('DOMContentLoaded', mardi);
