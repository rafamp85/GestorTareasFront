import React, { useContext, useState, useEffect } from 'react';
import tareaContext from '../../context/tareas/tareaContext';

const Timer = () => {

  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { tareaseleccionada, actualizarTarea, limpiarTarea } = tareasContext;

  useEffect( () => {
    if ( tareaseleccionada ) {
      if ( tareaseleccionada.estado ) {
        limpiarTarea();
      }
    };
    // eslint-disable-next-line
  }, [ limpiarTarea ]);

  const [counter, setCounter] = useState(0);
  const [maxTime, setMaxTime] = useState(0);;
  const [checkTime, setCheckTime] = useState(0);

  const [corriendo, setCorriendo] = useState(false);

  let interval;

  if ( !tareaseleccionada ) return <h2>Selecciona una tarea Incompleta</h2>;

  const startTimer = () => {

    // activa boton para detener el tiempo
    setCorriendo(true);
    let decrementa;

    if ( counter !== 0 ) {
      decrementa = counter;
    } else {
        decrementa = maxTime;
    }

    console.log(decrementa);

    interval = setInterval(() => {
      if ( decrementa === 0 ) {
        clearInterval(interval);
        cambiarEstado();
        return;
      }

      decrementa--;
      setCounter(decrementa);
      setCheckTime(interval);

    }, 1000);
  };

  const stopTimer = () => {
    setCorriendo(false);
    clearInterval(checkTime);
    return;
  };

  const resetTimer = () => {
    setCounter(maxTime);
  };


  const handleChange = e => {
    setCounter(0);
    setMaxTime( e.target.value );
  };

  // Lanza el Timer
  const onSubmit = e => {
    e.preventDefault();

    if ( maxTime === 0 ) {
      return;
    }

    startTimer();
  }


  // Función que modifica el estado de las tareas
  const cambiarEstado = tarea => {
    tareaseleccionada.estado = true;
    actualizarTarea( tareaseleccionada );
  };

  return (
    <li className="formularioTimer">

      <p className="tarea-seleccionada">{`${tareaseleccionada.nombre} : ${counter}`}</p>

      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="number"
            className="input-text"
            placeholder="Ingresa tiempo"
            name="maxTime"
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Iniciar"
          />
        </div>
      </form>

      <div className="acciones">
        { corriendo && counter !== 0 ? (
          <button
            type="button"
            className="btn btn-secundario"
            onClick={ stopTimer }
          >Detener</button>
      ) : <button
        type="button"
        className="btn btn-secundario"
        onClick={ resetTimer }
      >Reset</button> }
      </div>

    </li>
  );
};

export default Timer;
