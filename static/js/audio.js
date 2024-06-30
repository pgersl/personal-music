document.addEventListener('DOMContentLoaded', () => {

    const audioContainer = document.querySelector('.audio');
    const pieceCover = document.querySelector('.piece-cover');

    pieceCover.addEventListener('click', () => {
        audioContainer.classList.toggle('focused');
    })



    // Select all audio containers
    const audioPlayers = document.querySelectorAll('.audio-player');

    audioPlayers.forEach(container => {
        // Select the relevant elements within the current container
        const audioElement = container.querySelector('audio');
        const playPauseButton = container.querySelector('.play-pause');
        const progressBar = container.querySelector('.progress-bar');
        const progressBarFilled = container.querySelector('.progress-bar-filled');
        const currentTimeElement = container.querySelector('.current-time');
        const durationElement = container.querySelector('.duration');

        // Initialize the progress bar and time display
        function initialize() {
            // Set progress bar to 0 initially
            progressBar.value = 0;
            progressBarFilled.style.width = '0%';

            // Handle audio metadata loading
            audioElement.addEventListener('loadedmetadata', () => {
                durationElement.textContent = formatTime(audioElement.duration);
            });

            // Update progress bar and time on timeupdate
            audioElement.addEventListener('timeupdate', () => {
                const currentTime = audioElement.currentTime;
                const duration = audioElement.duration;
                const progress = (currentTime / duration) * 100;

                progressBar.value = progress;
                progressBarFilled.style.width = `${progress}%`;

                currentTimeElement.textContent = formatTime(currentTime);
                durationElement.textContent = formatTime(duration);
            });
        }

        // Toggle play/pause
        playPauseButton.addEventListener('click', () => {
            if (audioElement.paused) {
                // Pause all other audio elements
                document.querySelectorAll('.audio-content audio').forEach(otherAudio => {
                    if (otherAudio !== audioElement) {
                        otherAudio.pause();
                    }
                });
                // Play the current audio element
                audioElement.play();
                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audioElement.pause();
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        // Seek audio when progress bar is used
        progressBar.addEventListener('input', () => {
            const duration = audioElement.duration;
            audioElement.currentTime = (progressBar.value / 100) * duration;
        });

        // Format time in mm:ss
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }

        // Call initialize function
        initialize();
    });
});
