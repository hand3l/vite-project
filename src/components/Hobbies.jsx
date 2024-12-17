import gamingImg from '../assets/gaming.jpeg';
import sportsImg from '../assets/sports.jpeg';
import musicImg from '../assets/music.jpeg';

const Hobbies = () => {
  return (
    <div className="hobbies-section">
      <h2> 🚀 Mis Hobbies</h2>

      {/* Sección Videojuegos */}
      <div className="hobby-card">
        <img src={gamingImg} alt="Videojuegos" className="hobby-image" />
        <div className="hobby-content">
          <h3>🎮 Videojuegos</h3>
          <p>Disfruto jugar videojuegos, especialmente RPGs y juegos de aventuras. Es una manera de relajarme y sumergirme en otros mundos.</p>
        </div>
      </div>

      {/* Sección Deportes */}
      <div className="hobby-card">
        <img src={sportsImg} alt="Deportes" className="hobby-image" />
        <div className="hobby-content">
          <h3>⚽ Deportes</h3>
          <p>Practico baloncesto, natación y danza regularmente. Me gusta mantenerme activo por que me desestresa y mejorar mi resistencia física.</p>
        </div>
      </div>

      {/* Sección Escuchar Música */}
      <div className="hobby-card">
        <img src={musicImg} alt="Música" className="hobby-image" />
        <div className="hobby-content">
          <h3>🎧 Escuchar Música</h3>
          <p>Me encanta escuchar música de géneros variados como rock, pop y lo-fi. La música me acompaña mientras trabajo o estudio.</p>
        </div>
      </div>

      {/* Sección Leer Libros (Desde public) */}
      <div className="hobby-card">
        <img src="/libros.jpeg" alt="Leer Libros" className="hobby-image" />
        <div className="hobby-content">
          <h3>📚 Leer Libros</h3>
          <p>Disfruto leer libros de ciencia ficción, aventuras y desarrollo personal. La lectura me permite aprender y desconectar del día a día.</p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;


