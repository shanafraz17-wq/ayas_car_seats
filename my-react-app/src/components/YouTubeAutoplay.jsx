import React, { useEffect, useRef, useState } from 'react';

// Function to load the YouTube IFrame API
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (window.__ytApiReadyPromise) return window.__ytApiReadyPromise;

  window.__ytApiReadyPromise = new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
  });

  return window.__ytApiReadyPromise;
}

function YouTubeAutoplay({ videoId }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    let destroyed = false;
    loadYouTubeAPI().then((YT) => {
      if (destroyed || !containerRef.current) return;
      playerRef.current = new YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          loop: 1,
          playlist: videoId, // Required for loop to work
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            setIsMuted(true);
          },
        },
      });
    });

    return () => {
      destroyed = true;
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;
    if (isMuted) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  return (
    <div className="youtube-container">
      <div ref={containerRef} className="youtube-iframe" />
      <button onClick={toggleMute} className="youtube-mute-btn" aria-label={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}

export default YouTubeAutoplay;