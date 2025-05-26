document.querySelectorAll('video').forEach(video => {
    video.addEventListener('ended', () => {
        alert('¡El vídeo ha terminado!');
    });
});