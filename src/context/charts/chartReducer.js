import {
  SELECCIONAR_CHART,
} from '../../types';


export default ( state, action ) => {
    switch (action.type) {
      case SELECCIONAR_CHART:
        return {
          ...state,
          chart: state.charts.filter( chart => chart.idProyecto === action.payload ? chart : null )
        };

      default:
          return state;
    }
};
