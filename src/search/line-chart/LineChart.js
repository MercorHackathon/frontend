import "./LineChart.css";
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({username}) {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `${process.env.REACT_APP_API_URL}/api/mental-health-data?username=${username}`;
            try {
                const user_data = (await axios.get(url)).data;
                const chart_data = {
                    labels: user_data.map(item => item.date),
                    datasets: [
                        {
                            label: 'Mental Health Score',
                            data: user_data.map(item => item.m_health_score),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        // {
                        // label: 'Dataset 2',
                        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                        // borderColor: 'rgb(53, 162, 235)',
                        // backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        // },
                    ],
                };
                setData(chart_data);
            }
            catch(err) {
                console.error(err);
            }
        }
        fetchData();
    }, [username])

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Mental Health Score"
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Happiness Score'
                }
            }
        }  
    }

    return (
        data != null && (
            <div className="graph-container">
                <Line data={data} options={options}/>
            </div>
        )
    )
}