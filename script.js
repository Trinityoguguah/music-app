document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const splashScreen = document.getElementById('splash-screen');
    const homeScreen = document.getElementById('home-screen');
    const playerScreen = document.getElementById('player-screen');
    const skipButton = document.getElementById('skip-button');
    const themeToggle = document.getElementById('theme-toggle');
    
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const albumCover = playerScreen.querySelector('.album-cover');
    const songTitle = playerScreen.querySelector('h3');
    const artistName = playerScreen.querySelector('p');
    
    const musicList = [
        {
            title: "Correct",
            artist: "GreatMan Takit",
            src: "assets/Greatman_Takit_-_Correct_CeeNaija.com_.mp3",
            cover: "assets/correct GreatMan.jpeg"
        },
        {
            title: "Ogo ft Theophilus Sunday",
            artist: "Dunsin Oyekan",
            src: "assets/Dunsin_Oyekan_-_Ogo_CeeNaija.com_.mp3",
            cover: "assets/OgoBy Dunsin Oyekan.jpeg"
        },
        {
            title: "Walk ft Lecrae",
            artist: "Hulvey",
            src: "assets/Hulvey_-_Walk_CeeNaija.com_.mp3",
            cover: "assets/walK Hulvey.jpg"
        },
        {
            title: "Correct",
            artist: "GreatMan Takit",
            src: "assets/Greatman_Takit_-_Correct_CeeNaija.com_.mp3",
            cover: "assets/correct GreatMan.jpeg"
        },
        {
            title: "Ogo ft Theophilus Sunday",
            artist: "Dunsin Oyekan",
            src: "assets/Dunsin_Oyekan_-_Ogo_CeeNaija.com_.mp3",
            cover: "assets/OgoBy Dunsin Oyekan.jpeg"
        },
        
    ];

    let currentTrack = 0;


    function loadTrack(index) {
        const track = musicList[index];
        audioPlayer.src = track.src;
        songTitle.textContent = track.title;
        artistName.textContent = track.artist;
        albumCover.src = track.cover;
    }

    
    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<img src="assets/pause.png" width="50px" height="50px"></img>';
            audioContext.resume();
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<img src="assets/play.png" width="50px" height="50px">';
        }
    }

    
    function nextTrack() {
        currentTrack = (currentTrack + 1) % musicList.length;
        loadTrack(currentTrack);
        audioPlayer.play();
        playPauseButton.innerHTML = '<img src="assets/pause.png" width="50px" height="50px"></img>';
    }


    function prevTrack() {
        currentTrack = (currentTrack - 1 + musicList.length) % musicList.length;
        loadTrack(currentTrack);
        audioPlayer.play();
        playPauseButton.innerHTML = '<img src="assets/pause.png" width="50px" height="50px"></img>';
    }

    
    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', nextTrack);
    prevButton.addEventListener('click', prevTrack);

    const topMixAlbums = document.querySelectorAll('#top-mix .album');
    topMixAlbums.forEach(album => {
        album.addEventListener('click', function() {
            const trackIndex = parseInt(this.getAttribute('data-index'));
            currentTrack = trackIndex;
            loadTrack(currentTrack);
            playerScreen.classList.remove('hidden');
            homeScreen.classList.add('hidden');
            audioPlayer.play();
            playPauseButton.innerHTML = '<img src="assets/pause.png" width="50px" height="50px"></img>';
        });
    });

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });

    
    skipButton.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
    });

    
    loadTrack(currentTrack);
});
