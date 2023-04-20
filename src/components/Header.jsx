import React from "react"
import CarouselItem from "./CarouselItem"


const Header = () => {
    return (
        <>
            {/* <section className="p-10 text-white bg-[url('/ash-edmonds-unsplash.jpg')] bg-cover"> */}
            <section className="p-10 text-white bg-[url('/codioful-unsplash.jpg')] bg-center bg-cover">   
             {/*  */}
                <div>
                    <div>
                        <h2 className="font-[poppins]">Balance</h2>
                        <h1 className=" text-4xl font-[poppins]"> 83,376.00 USD </h1>
                        <div>
                            <CarouselItem />
                        </div>
                    </div>
                    {/* <div>
                        <CarouselItem />
                    </div> */}
                </div>
            </section>

            {/* <section>
                
            </section> */}
        </>
    )
}

export default Header