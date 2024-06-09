import React, { useEffect, useState } from 'react'
import Banner from '../EstructuraHome/Banner'
import Section from '../EstructuraHome/Section'
import SectionTeam from '../EstructuraHome/SectionTeam'
import SectionServicesTop from '../EstructuraHome/SectionServicesTop'
import SectionEmail from '../EstructuraHome/SectionEmail'
import SectionServicesDesc from '../EstructuraHome/SectionServicesDesc'
import SectionExplore from '../EstructuraHome/SectionExplore'

function Home({ userActive }) {
    return (
        <div className=' min-h-screen h-full w-full'>
            <div className=' bg-white h-full w-full md:border-x border-none '> 
                <Banner />
                <Section />
                <SectionTeam />
                <SectionServicesTop />
                {!userActive && <SectionEmail />}
                <SectionServicesDesc />
                <SectionExplore />
            </div>
        </div >
    )
}

export default Home