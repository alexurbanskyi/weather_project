import React from "react";
import s from './Graph.module.css'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
 } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Loader from "../Loader/Loader";

function Graph({ fiveDaysData }){
  if (Object.keys(fiveDaysData).length === 0 ) return  (<Loader/>)
  
  let tempArr = []; 
  let humidityArr = [];
  let windArr = []; 
  let pressureArr = []; 
  let dateArr  = [];

  for (let i = 0; i <=39 ; i=i+2){
   tempArr.push(fiveDaysData.arr[i].main.temp)
   dateArr.push(fiveDaysData.arr[i].dt_txt)
   humidityArr.push(fiveDaysData.arr[i].main.humidity);
   windArr.push(fiveDaysData.arr[i].wind.speed)
   pressureArr.push(fiveDaysData.arr[i].main.pressure*0.75);
  }

    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
    const labels = dateArr
    const optionsTemp = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'График изменения температуры',
        },
      },
    };

    const optionsHumidity = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'График изменения влажности',
        },
      },
    };
    
    const optionsWind = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'График скорости ветра',
        },
      },
    };
    
    const optionsPressure = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'График изменения давления',
        },
      },
    };
    
    
    const dataTemp = {
      labels,
      datasets: [
        {
          label: `Температура C`,
          data: tempArr,
          backgroundColor: 'rgba(48, 132, 223, 0.9)',
        }      
      ],
    };

    const dataHumidity = {
      labels,
      datasets: [
        {
          label: 'Влажность %',
          data: humidityArr,
          backgroundColor: 'rgba(48, 132, 223, 0.9)',
        }      
      ],
    };

    const dataWind = {
      labels,
      datasets: [
        {
          label: 'Скорость ветра м/c',
          data: windArr,
          backgroundColor: 'rgba(48, 132, 223, 0.9)',
        }      
      ],
    };

    const dataPressure = {
      labels,
      datasets: [
        {
          label: 'Давление мм рт. ст.',
          data: pressureArr,
          backgroundColor: 'rgba(48, 132, 223, 0.9)',
        }      
      ],
    };

   return(
      <div className={s.graph} >
        <p className={s['city-name']}>{fiveDaysData.name}</p>
        <div className={s["chart-container"]} >
          <Bar className={s.qqq} options={optionsTemp} data={dataTemp} />
        </div>
        <div className={s["chart-container"]} >
          <Bar className={s.qqq} options={optionsHumidity} data={dataHumidity} />;
        </div>  
        <div className={s["chart-container"]} >
          <Bar options={optionsWind} data={dataWind} />;
        </div>     
        <div className={s["chart-container"]} >
          <Bar options={optionsPressure} data={dataPressure} />;
        </div>       
      </div>
   );
}
export default Graph;