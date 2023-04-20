import React, {useState, useEffect} from "react"
import AliceCarousel from "react-alice-carousel"
import axios from "axios"
import { Link } from "react-router-dom"


const CarouselItem = () => {

    const [trending, setTrending] = useState([])

    const getTrending = async () => {
        // await
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
        console.log('inside trending for carousel:')
        console.log(data)
        setTrending(data)
    }


    useEffect(() => {
        getTrending()
    }, [])


    const items = trending.map((crypto) => {

        return (
            <div className="flex-col content-center text-center border-b text-black "> 
                <Link to={`/coin/${crypto?.id}`}>
                    <div>
                        <img className="mx-auto" 
                        src={crypto?.image.replace('large', 'small')} 
                        alt={crypto?.name} 
                        height="80"></img>
                    </div>
                    <h1>{crypto?.name}</h1>
                    <h2>${crypto?.current_price}</h2>
                    <h2>{}</h2>
                </Link>
            </div>
        )
    })

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };

    return (
        <>
            <div className="h-1/2 flex content-center">
                <AliceCarousel 
                  mouseTracking
                  infinite
                  autoPlayInterval={1000}
                  animationDuration={1500}
                  disableDotsControls
                  disableButtonsControls
                  responsive={responsive}
                  items={items}
                  autoPlay
                />
            </div>
        </>
    )
} 

export default CarouselItem