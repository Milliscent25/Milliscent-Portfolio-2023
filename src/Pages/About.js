import React from 'react'

import Banner from "../components/AboutPage/AbtBanner/AbtBanner";
import Mimi from "../components/AboutPage/Mimi/Mimi";
 import Techstack from "../components/AboutPage/Techstack/Techstack";
import Abtfooter from "../components/AboutPage/Abtfooter/Abtfooter";

export default function About() {
    return (
        <>
            <Banner />
            <Mimi />
            <Techstack />
            <Abtfooter />
        </>
    )
};