import React from 'react'
import Home from './Home'
import Techstack from './Techstack'
import Toolstack from './Skills'
import Github from './Github'
import Projects from './Projects'
import FinalSection from './FinalSection'
import Achievements from './Achievements'
import AskMe from './AskMe'

const RightCanvas = () => {
    return (
        <div className="flex flex-col md:w-2/3 p-5 h-auto w-full ml-auto text-white md:pt-11 md:backdrop-blur-0 backdrop-blur-sm">
            <Home />
            <Techstack />
            <Toolstack/>
            <Achievements/>
            <Projects/>
            <AskMe/>
            <Github/>
            <FinalSection/>
        </div>
    )
}

export default RightCanvas