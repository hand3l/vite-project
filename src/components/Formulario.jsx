// FormularioRegistro.jsx
import React, { useState } from 'react';
import '../styles/Formulario.css';

const FormularioRegistro = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [credito, setCredito] = useState(''); // Nuevo campo
  const [docente, setDocente] = useState(''); // Nuevo campo
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setMensaje(
      `\u2728 ¡Gracias, ${nombre}! \u2728\nTus datos han sido registrados:\nCarrera: ${carrera}\nMateria: ${materia}\nFecha: ${fecha}\nNúmero de crédito: ${credito}\nDocente: ${docente}`
    );
  };

  return (
    <div className="formulario-contenedor">
      <h2 className="titulo">Registro de Estudiante</h2>
      <form onSubmit={handleSubmit} className="formulario">
        {/* Campo de nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </label>

        {/* Campo de correo */}
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </label>

        {/* Campo de carrera */}
        <label>
          Carrera:
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
          />
        </label>

        {/* Campo de materia */}
        <label>
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
          />
        </label>

        {/* Nuevo campo: Número de crédito */}
        <label>
          Número de crédito:
          <input
            type="number"
            value={credito}
            onChange={(e) => setCredito(e.target.value)}
            placeholder="Ingresa el número de crédito"
          />
        </label>

        {/* Nuevo campo: Docente */}
        <label>
          Docente:
          <input
            type="text"
            value={docente}
            onChange={(e) => setDocente(e.target.value)}
            placeholder="Ingresa el nombre del docente"
          />
        </label>

        {/* Campo de fecha */}
        <label>
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        {/* Botón de envío */}
        <button type="submit">Registrar</button>
      </form>

      {/* Mensaje de confirmación */}
      {mensaje && (
        <div className="mensaje">
          {mensaje.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormularioRegistro;

