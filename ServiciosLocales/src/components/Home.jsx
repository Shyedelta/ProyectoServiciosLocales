import React from 'react'
import Banner from './Banner'
import Section from './Sections/Section'
import SectionTeam from './Sections/SectionTeam'
import SectionServicesTop from './Sections/SectionServicesTop'
import SectionEmail from './Sections/SectionEmail'
import SectionServicesDesc from './Sections/SectionServicesDesc'
import SectionExplore from './Sections/SectionExplore'

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