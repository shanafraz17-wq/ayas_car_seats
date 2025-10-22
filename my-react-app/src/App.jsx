import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css' // main stylesheet

// ✅ Dynamically import all images from assets folder
const showcaseImages = import.meta.glob("./assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

// ==========================================
// Ayas Car Seats - SPA (Home, Catalogue, Contact, Why Ayas?)
// - Hash-based router: #/, #/catalogue, #/contact, #/why-ayas
// - MERN-ready: service layer can call /api/products when backend is ready
// ==========================================

const USE_API = false

const api = {
  async list() {
    if (!USE_API) return null
    const res = await fetch('/api/products')
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  },
}

const LOGO_SRC = '/.acslogo.jpeg'
const FALLBACK_IMG = 'https://placehold.co/1000x700?text=Ayas+Car+Seats'
const FALLBACK_LOGO = 'https://placehold.co/200x200/ffffff/0f172a?text=ACS'

// YouTube autoplay configuration
const YT_VIDEO_ID = '4HFe4W6tajY'
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT)
  if (window.__ytApiReadyPromise) return window.__ytApiReadyPromise
  window.__ytApiReadyPromise = new Promise((resolve) => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag)
    window.onYouTubeIframeAPIReady = () => resolve(window.YT)
  })
  return window.__ytApiReadyPromise
}

function YouTubeAutoplay({ videoId = YT_VIDEO_ID }) {
  const containerRef = useRef(null)
  const playerRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    let destroyed = false
    loadYouTubeAPI().then((YT) => {
      if (destroyed) return
      playerRef.current = new YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            try {
              e.target.mute()
              e.target.playVideo()
              setIsMuted(true)
            } catch {}
          },
        },
      })
    })

    return () => {
      destroyed = true
      try {
        playerRef.current && playerRef.current.destroy && playerRef.current.destroy()
      } catch {}
    }
  }, [videoId])

  function toggleMute() {
    const p = playerRef.current
    if (!p) return
    try {
      if (isMuted) {
        p.unMute()
        p.playVideo()
        setIsMuted(false)
      } else {
        p.mute()
        setIsMuted(true)
      }
    } catch {}
  }

  return (
    <>
      <div ref={containerRef} style={styles.videoIframe} />
      <button onClick={toggleMute} aria-label={isMuted ? 'Unmute video' : 'Mute video'} style={styles.muteBtn}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </>
  )
}

function ImageWithFallback({ src, fallback = FALLBACK_IMG, fallbackList = [], alt = '', style, ...rest }) {
  const [candidates] = useState([src, ...fallbackList, fallback, FALLBACK_IMG])
  const [index, setIndex] = useState(0)
  return (
    <img
      src={candidates[index]}
      alt={alt}
      style={style}
      onError={() => setIndex((i) => (i + 1 < candidates.length ? i + 1 : i))}
      loading="lazy"
      {...rest}
    />
  )
}

// Simple hash-based router hook
import Header from './components/Header';
import Home from './components/Home';
import Catalogue from './components/catalogue';
import WhyAyas from './components/WhyAyas';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, '') || '/');
  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash.replace(/^#/, '') || '/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return [route, (r) => (window.location.hash = r)];
}

function App() {
  const [route, navigate] = useHashRoute();

  const renderPage = () => {
    switch (route) {
      case '/catalogue': return <Catalogue />;
      case '/why-ayas': return <WhyAyas />;
      case '/contact': return <Contact />;
      case '/':
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
      <Header route={route} navigate={navigate} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;