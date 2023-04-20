import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import '../index.css'

import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement,
    Legend,
    Tooltip,
)

const CryptoChart = ({coin}) => {

    const [historyData, setHistoryData] = useState()
    const [days, setDays] = useState(1);
    const params = useParams()
    
    console.log('checking coin.id params:')
    // console.log(coin.id)
    console.log(params.coinId)

    console.log(`days checked: ${days}`)
    console.log('inside CryptoChart historyData:')
  

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=${days}`

    const fetchData = async (coin) => {
        console.log('inside fetchData:')
        await console.log(coin?.id, days)
        const {data} = await axios.get(url)
        setHistoryData(data?.prices)
    }
    

    useEffect(() => {
        fetchData(coin)
    },[days])

    return (
        <>
        <div className="w-[600px] h-[450px] lg:m-6 py-10 md:m-auto">
            <div className="text-white flex justify-between">
                <button className="btn" onClick={() => setDays(1)}>1 day</button>
                <button className="btn" onClick={() => setDays(30)}>30 days</button>
                <button className="btn" onClick={() => setDays(90)}>3 month</button>
                <button className="btn" onClick={() => setDays(365)}>1 year</button>
            </div>

            <div>
                <h1 className="text-white text-center my-4">Chart:</h1>
                <Line
                    data={{
                        // date info 
                    //   labels : [dateStr, dateStr2, '2023/4/2'],
                    
                      labels: historyData?.map((c) => {
                        let dateData = new Date(c[0])
                        let minutes = dateData.getMinutes().toString()
                        minutes = minutes.padStart(2, '0')
                        let time = 
                            dateData.getHours() > 12
                            ? `${dateData.getHours() - 12}:${minutes} PM`
                            : `${dateData.getHours()}:${minutes} AM`
                        return days === 1 ? time : dateData.toLocaleDateString();
                      }),  

                      plugin: {
                        legend: true
                      },

                      datasets: [
                        {
                          label: 'Price',
                                // prices:
                          data : historyData?.map((c) => c[1].toFixed(4)),
                       backgroundColor: 'white',
                       borderColor: 'gray',
                       fill: true,
                       // bending of graph:
                       tension: .4
                    
                      }
                    ]                        
                    }}
                />    
            </div>
            </div>
        </>
    )
}

export default CryptoChart