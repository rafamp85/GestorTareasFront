import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  // Obtener el State del Formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  // State para proyecto
  const [ proyecto, guardarProyecto ] = useState({
    nombre: ''
  });

  // Extraer nombre de proyecto
  const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  // Cuando un usuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    // Validar el proyectos
    if ( nombre === '' ) {
      mostrarError();
      return;
    }

    // agregar el state
    agregarProyecto(proyecto);

    // reiniciar el form
    guardarProyecto({
      nombre: ''
    });
  };

  const onClickFormulario = () => {
    mostrarFormulario()
  };


  return (
    <Fragment>
        <button
          type="button"
          className="btn btn-block btn-primario"
          onClick={ onClickFormulario }
        >Nuevo Proyecto</button>

      { formulario
          ?
            (
              <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
              >
                <input
                  type="text"
                  className="input-text"
                  placeholder="Nombre Proyecto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeProyecto}
                />

                <input
                  type="submit"
                  className="btn btn-primario btn-block"
                  value="Agregar Proyecto"
                />

              </form>
            )
          : null
      }

      {errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null}

    </Fragment>
  );
};

export default NuevoProyecto;
