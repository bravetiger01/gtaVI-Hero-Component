export default function Home() {
  return (
    <div className="page-container">
      <div className="content">
        <div className="logo-mask">
          <div className="background"></div>
        </div>

        <img 
          className="slide-1 play-button"
          src="/file.svg"
          alt="Play"
        />

        <div className="slide-1 scroll-logo">
          <div className="container">
            <p>WATCH TRAILER</p>
            <img src="/window.svg" alt="Watch Trailer" />
          </div>
        </div>

        <svg 
          className="slide-1 scroll-arrow" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 32 12" 
          width="32"
          height="12"
        >
          <path
            d="M31.7948 1.60281C32.2537 2.47697 31.9171 3.55765 31.0429 4.01658L15.9054 11.9638L0.948843 4.01224C0.0770835 3.54878 -0.253903 2.46636 0.209564 1.5946C0.673031 0.722843 1.75545 0.391857 2.62721 0.855324L15.9159 7.92018L29.381 0.850985C30.2552 0.392054 31.3358 0.728659 31.7948 1.60281Z"
            fill="#f0f0f0"
          />
        </svg>

        <div className="slide-2-text">
          <h1>WELCOME TO LEONIDA</h1>
          <p>
            Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and
            beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet. Coming 2025 to
            PlayStation 5 and Xbox Series X|S.
          </p>
          <a>Watch Trailer</a>
        </div>
      </div>

      <section></section>
      <section></section>
    </div>
  );
}