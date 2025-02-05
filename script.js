document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const stopBtn = document.getElementById('stop-btn');
    const trackTitle = document.getElementById('track-title');

    // Set the track title
    trackTitle.textContent = "Your Track Title";

    // Play button functionality
    playBtn.addEventListener('click', () => {
        audio.play();
    });

    // Pause button functionality
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });

    // Stop button functionality
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    });
});