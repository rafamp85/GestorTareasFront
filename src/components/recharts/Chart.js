import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({chart, proyectos}) => {

  const ingresaDatos = () => {

    let resCompletados = 0;
    let restIncompletos = 0;
    let tareasCompletas = 0;

    for ( let proyecto of proyectos ) {
      tareasCompletas ++;
      if ( proyecto.estado ) {
        resCompletados ++;
      } else {
        restIncompletos ++;
      }
    }

    chart.data = [
      {name: 'Tareas Completas', tc: resCompletados, tt: tareasCompletas },
      {name: 'Tareas Incompletas', tc: restIncompletos, tt: tareasCompletas },
    ];

    console.log(resCompletados, restIncompletos);
  };

  ingresaDatos();

  return (
    <div className="show-chart">
      <h2>{chart.nombre}</h2>

      <LineChart width={600} height={300} data={chart.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="tc" stroke="red" />
        <Line type="monotone" dataKey="tt" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Chart;
