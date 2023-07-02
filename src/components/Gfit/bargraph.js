import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarGraph = () => {

  const data1 = [1080,1500,2000]
  const data2 = [3000,2800,1500]

  const sumData1 = data1.reduce((acc, current) => acc + current, 0);
  const average1 = sumData1 / data1.length;
  
  // Calculate average of data2
  const sumData2 = data2.reduce((acc, current) => acc + current, 0);
  const average2 = sumData2 / data2.length;


  const scaledAverage1 = (average1 / Math.max(...data1)) * 100;
  const scaledAverage2 = (average2 / Math.max(...data2)) * 100;

  const [chartData, setChartData] = useState({
    series: [
      {
        name:"Individual Score",
        data: data1,
      },
      {
        name:"Average of all employess score",
        data: data2,
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ["Steps","Calories Expended","Heart Points"],
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={chartData.options.chart.height}
      />

<p>Employee's average pHealth Score is {scaledAverage1.toFixed(2)} and overall employee average is {scaledAverage2.toFixed(2)}</p>

    </div>
  );
};

export default BarGraph;
