import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import profilePublic from '/profile-public.jpg'; // Desde public
import FormularioRegistro from './components/Formulario';

function App() {
  return (
    <div className="app-container">
      {/* Sección Principal con Foto Personal */}
      <header className="profile-header">
        <img src={profilePublic} alt="Foto Personal" className="profile-image" />
        <h1> Handel Manobanda </h1>
        <p>Bienvenido a mi portafolio personal</p>
      </header>

      {/* Secciones de Contenido */}
      <PersonalInfo />
      <Education />
      <Skills />
      <Hobbies />
      <FormularioRegistro />
    </div>
  );
}

export default App;



