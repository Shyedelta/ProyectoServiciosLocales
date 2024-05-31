import React from 'react'
import Banner from './Banner'
import Section from './Sections/Section'
import SectionTeam from './Sections/SectionTeam'
import SectionServicesTop from './Sections/SectionServicesTop'

function Home() {

    return (
        <div className=' min-h-screen h-full w-full'>
            <div className=' bg-white h-full w-full border-x '>
                <Banner />
                <Section />
                <SectionTeam />
                <SectionServicesTop />
            </div>
        </div >
    )
}

export default Home