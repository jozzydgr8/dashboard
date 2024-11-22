import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

export const LineChart = ({chartData})=>{
    const options = {
        maintainAspectRatio: false, // Prevents automatic resizing while keeping the aspect ratio
        responsive: true,           // Allows the chart to respond to container resizing
      };
      const modifiedChartData = {
        ...chartData,
        datasets: chartData.datasets.map(dataset => ({
          ...dataset,
          tension: 0.4,  //for the curve on line
        })),
      };
    return        <Line data={modifiedChartData} options={options}/>

}