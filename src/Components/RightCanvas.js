import React from 'react'
import Home from './Home'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import Github from './Github'
import Projects from './Projects'
import FinalSection from './FinalSection'

const RightCanvas = () => {
    return (
        <div className="flex flex-col w-2/3 h-auto ml-auto text-white pt-11">
            <Home />
            <Techstack />
            <Toolstack/>
            <Github/>
            <Projects/>
            <FinalSection/>
        </div>
    )
}

export default RightCanvas