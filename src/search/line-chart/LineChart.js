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
            const url = `${process.env.REACT_APP_API_URL}/api/getMentalHealthData?username=${username}`;
            try {
                const ret_data = (await axios.get(url, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})).data;
                // console.log(ret_data)
                const chart_data = {
                    labels: ret_data.user_data.map(item => item.date),
                    datasets: [
                        {
                            label: `${username}'s Mental Health Score`,
                            data: ret_data.user_data.map(item => item.m_health_score),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                        label: 'Global Mental Health Score',
                        data: ret_data.global_data.map(item => item.m_health_score),
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
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
                <p id="score-display">Your current happiness index is <p id="red-text">{80}</p> whereas global happiness index is <p id="blue-text">{70}</p></p>
            </div>
        )
    )
}