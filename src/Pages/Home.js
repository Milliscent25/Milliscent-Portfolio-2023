import React from 'react'


import Banner from "../components/Banner/Banner";
import Who from "../components/Who/Who";
import Port from "../components/Port/Port";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import { Navbar } from 'react-bootstrap';

export default function Home() {
    return (
        <> 
            <Navbar/>
            <Banner />
            <Who />
            <Port />
            <HomeFooter/>
        </>
    )
}