import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import xss from "xss"

import CryptoChart from "../components/CryptoChart"


const CryptoDetails = () => {
    console.log('inside cryptoDetails:')

    // use params to gather coin data from url:
    const params = useParams()
    const [coin, setCoin] = useState({})
    console.log(coin)

    const dangerousText = coin.description?.en
    const html = xss(dangerousText, {
        whiteList: {},
        stripIgnoreTag: true,
        stripIgnoreBody: true,
    })


    const coinStructure = html.split('. ').slice(0,3).join('. ')
    console.log(coinStructure)

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((response) => {
            // console.log(response.data)
            setCoin(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    
    
    return (
            <>
            <div className="lg:flex">
                <hr></hr>

                <div className="text-white py-10 px-6 sm:w-full md:w-full">
                    <div className="content-center align-center text-center sm:w-full m-auto">
                        <h1 className="text-3xl">{coin?.id?.toUpperCase()}</h1>
                        { coin.image ? <img className='m-auto' src={`${coin.image?.large}`} alt={coin.id}/> : null}
                        <h1 className="text-3xl">${coin?.market_data?.current_price?.usd} USD</h1>
                        
                        <div className="CDetails-table grid md:grid-cols-2">
                                <div>
                                    <div className="flex justify-between"><h1>Market Cap Rank:</h1><h1>{coin?.market_data?.market_cap_rank ? coin?.market_data?.market_cap_rank : 'N/A'}</h1></div>
                                    <hr></hr>
                                    <div className="flex justify-between"><h1>24 HR Price Change:</h1><h1>${coin?.market_data?.price_change_24h ? coin?.market_data?.price_change_24h.toFixed(2) : 'N/A'}</h1></div>
                                    <hr></hr>
                                    <div className="flex justify-between"><h1>Fully Diluted Value:</h1><h1>${coin?.market_data?.fully_diluted_valuation?.usd ? coin?.market_data?.fully_diluted_valuation?.usd.toLocaleString() : 'N/A'}</h1></div>
                                    <hr></hr>
                                </div>

                                <div className="md:pl-3">
                                    <div className="flex justify-between"><h1>Circulating Supply:</h1><h1>{coin?.market_data?.circulating_supply ? coin?.market_data?.circulating_supply.toLocaleString() : 'N/A'}</h1></div>
                                    <hr></hr>
                                    <div className="flex justify-between"><h1>Total Supply:</h1><h1>{coin?.market_data?.total_supply ? coin?.market_data?.total_supply.toLocaleString() : 'N/A'}</h1></div>
                                    <hr></hr>
                                    <div className="flex justify-between"><h1>Max Supply:</h1><h1>{coin?.market_data?.max_supply ? coin?.market_data?.max_supply.toLocaleString() : 'N/A'}</h1></div>
                                    <hr></hr>
                                </div>
                        </div>

                        {coin?.description ? <p className="pt-6">{coinStructure}</p> : ''}
                    </div>
                </div>

                <div>
                    <CryptoChart coin={coin}/>
                </div>

            </div>
            </>

        
    )
}

export default CryptoDetails