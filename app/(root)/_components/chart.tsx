"use client"
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const data = {
  labels: [
    
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
const Charts = () => {
    return ( 
        <div className="flex w-62 h-52 items-center ">
        <Doughnut data={data} className='w-full h-full' />
        </div>
     );
}
 
export default Charts;