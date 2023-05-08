import React from 'react'

import Banner from "../components/PortfolioPage/PortBanner/PortBanner";
import PortList from "../components/PortfolioPage/PortList/PortList";
import Abtfooter from '../components/AboutPage/Abtfooter/Abtfooter';
;
// import footer from "../components/AboutPage/Abtfooter/Abtfooter";

export default function Portfolio() {
    return (
        <>
            <Banner />
            <PortList />
            <Abtfooter />
            {/* <footer />   */}
        </>
    )
}