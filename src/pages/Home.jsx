import React from "react"
import requests from "../requests"
import Header from "../components/Header"
import ColumnData from "../components/ColumnData"



const Home = () => {
    return (
        <div>
            <Header />
            <ColumnData requestData={requests}/>
        </div>
    )
}

export default Home