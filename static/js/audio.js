const audioContainers = document.querySelectorAll(".audio");
audioContainers.forEach((audioContainer) => {
    const audioElement = audioContainer.querySelector("audio");
    const playPauseButton = audioContainer.querySelector(".play-pause-btn");
    const volumeButton = audioContainer.querySelector(".volume-btn");
    const progressBar = audioContainer.querySelector(".progress-bar");
    const progressBarClick = audioContainer.querySelector(".progress-bar-click");
    const currentTimeDisplay = audioContainer.querySelector(".current-time");
    const lengthTimeDisplay = audioContainer.querySelector(".length-time");

    playPauseButton.addEventListener("click", togglePlayPause);
    volumeButton.addEventListener("click", toggleMuteUnmute);
    audioElement.addEventListener("timeupdate", updateProgressAndTime);
    progressBarClick.addEventListener("click", function (event) {
        seekAudio(event, progressBar);
    });

    function togglePlayPause() {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
        updatePlayPauseButton();
        updateProgressAndTime();
    }

    function updatePlayPauseButton() {
        const icon = playPauseButton.querySelector(".play-pause-icon");
        if (audioElement.paused) {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
        } else {
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
        }
    }

    function toggleMuteUnmute() {
        audioElement.muted = !audioElement.muted;
        updateVolumeButton();
    }

    function updateVolumeButton() {
        const icon = volumeButton.querySelector(".volume-icon");
        if (audioElement.muted) {
            icon.classList.remove("fa-volume-high");
            icon.classList.add("fa-volume-mute");
        } else {
            icon.classList.remove("fa-volume-mute");
            icon.classList.add("fa-volume-high");
        }
    }

    progressBarClick.addEventListener("click", function (event) {
        const progressBarWidth = progressBarClick.clientWidth;
        const clickedPosition = event.clientX - progressBarClick.getBoundingClientRect().left;
        const newPositionPercentage = (clickedPosition / progressBarWidth) * 100;
    
        const newTime = (newPositionPercentage / 100) * audioElement.duration;
        audioElement.currentTime = newTime;
    
        updateProgressAndTime();
    });

    function updateProgressAndTime() {
        const currentTime = formatTime(audioElement.currentTime);
        const totalTime = formatTime(audioElement.duration);
        currentTimeDisplay.textContent = currentTime;
        lengthTimeDisplay.textContent = totalTime;
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    updatePlayPauseButton();
    updateVolumeButton();
});
