import React, {useState, useEffect} from "react"
import axios from "axios"
import CryptoData from "./CryptoData"


const ColumnData = () => {

    const [coins, setCoins] = useState([])
    const [top, setTop] = useState(10)
    console.log('useState top:')
    console.log(top)

    console.log('columnData coins:')
    console.log(coins)


    useEffect(() => {

        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${top}&page=1&sparkline=false&locale=en`).then((response) => {
            console.log(response.data)
            setCoins(response.data)
        })
    },[top])

    return (
        <div className="text-white p-10">



            <h1 className="text-2xl">Top Coins:</h1>

            <div className="text-white flex justify-between pt-4">
                <button className="btn" onClick={() => setTop(20)}>Top 20</button>
                <button className="btn" onClick={() => setTop(50)}>Top 50</button>
                <button className="btn" onClick={() => setTop(100)}>Top 100</button>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Rank</th>
                                    <th scope="col" className="px-6 py-4">Crypto</th>
                                    <th scope="col" className="px-6 py-4">Current Price</th>
                                    <th scope="col" className="px-6 py-4">24 hr Price Change</th>
                                    <th scope="col" className="px-6 py-4">24 hr Percentage Change</th>
                                    <th scope="col" className="px-6 py-4">Market Volume</th>
                                </tr>
                            </thead>
                                {coins.map((coin, index) => ( 
                                        <CryptoData key={index} id={index} coin={coin} />
                                    ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ColumnData