import React from "react"
import { Link } from "react-router-dom"
import CryptoDetails from '../pages/CryptoDetails'


const CryptoData = ({coin, id}) => {
    console.log('inside CryptoData:')
    console.log(coin)
    const coinData = coin


    const image = coin.image
    const newImg = image.replace('large', 'small')
    coin.image = newImg
    console.log(coin.image)

    return (
        <>
        <tbody>
            <tr class="border-b dark:border-neutral-500 bg-[#191919]">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{id + 1}</td>
                <td class="whitespace-nowrap px-6 py-4">
                {console.log('coinData send to coinDetails.jsx:')}
                {console.log(coinData)}
                <Link to={`/coin/${coin.id}`} element={<CryptoDetails />}>
                    <div className="flex text-center">
                            <img src={`${coin.image}`} alt={coin?.id} />
                            <p className='mx-2 my-4'>{coin?.id} ({coin?.symbol})</p>        
                    </div>
                </Link>
                </td>
                <td class="whitespace-nowrap px-6 py-4">${coin.current_price.toFixed(2)}</td>
                { Math.sign(coin.price_change_24h.toFixed(2)) === -1 ? <td class="whitespace-nowrap px-6 py-4 text-red-600">${coin.price_change_24h.toFixed(2)}</td> : <td class="whitespace-nowrap px-6 py-4 text-green-400">${coin.price_change_24h.toFixed(2)}</td>}
                { Math.sign(coin.price_change_percentage_24h.toFixed(2)) === -1 ? <td class="whitespace-nowrap px-6 py-4 text-red-600">{coin.price_change_percentage_24h.toFixed(2)}%</td> : <td class="whitespace-nowrap px-6 py-4 text-green-400">{coin.price_change_percentage_24h.toFixed(2)}%</td>}
                <td class="whitespace-nowrap px-6 py-4">{coin.market_cap.toLocaleString()}</td>
            </tr>
        </tbody>

    </>
    )
}


export default CryptoData