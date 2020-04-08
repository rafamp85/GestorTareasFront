import React, { useReducer } from 'react';
import ChartContext from './chartContext';
import ChartReducer from './chartReducer';

import {
  SELECCIONAR_CHART,
} from '../../types'

const ChartState = props => {

  const initialState = {
    chart: null,
    charts: [
      { _id: 1, nombre: 'Gráfica Tienda Virtual', idProyecto: '5e86c5538c524466c4ca3f1c', data: [] },
      { _id: 2, nombre: 'Gráfica Mern', idProyecto: '5e86deb7b9b7a765a8f170b6', data: [] },
      { _id: 3, nombre: 'Gráfica Gestor Gastos', idProyecto: '5e8c0021ef988048acaafb49', data: [] },
    ]
  };

  // Crear dispatch y state
  const [ state, dispatch ] = useReducer( ChartReducer, initialState );

  // Obtener las tareas de un proyecto
  const seleccionarChart = async idProyecto => {
    console.log(idProyecto);
    try {
      dispatch({
        type: SELECCIONAR_CHART,
        payload: idProyecto
      });

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <ChartContext.Provider
      value={{
        chart: state.chart,
        charts: state.charts,
        seleccionarChart,
      }}
    >
      {props.children}
    </ChartContext.Provider>
  );

};
export default ChartState;
