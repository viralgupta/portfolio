import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <>
            <br />
            <br />
            <div className="project-heading text-3xl font-mono font-extrabold mb-8">
                <strong className="text-green-100">Projects </strong> I have made
            </div>
            <div className="flex flex-wrap">
                <ProjectCard Title={"DigiBooking"} Tags={"Webdev IOT"} Description={"Event booking website, Using face data to book images, Your Face will be your Tickets! Made using AWS Rekognition."} Link={"https://github.com/viralgupta/digi-booking"} Imagelink={"Assets/Projects/digibooking.png"}/>
                <ProjectCard Title={"Real Time Chess Website"} Tags={"Webdev"} Description={"Chess Website where you can search people, accept/reject requests to play, Made using Socket.io"} Link={"https://github.com/viralgupta/chess"} Imagelink={"Assets/Projects/chess.png"}/>
                <ProjectCard Title={"Youtube Subscription Only"} Tags={"Webdev"} Description={"Simple website to get your Youtube Subscription Feed, to help you get over distractions, Implemented using OAuth2.0"} Link={"https://youtube-subscription-only.vercel.app/"} Imagelink={"Assets/Projects/yso.png"}/>
                <ProjectCard Title={"Whatsapp Attendance Bot"} Tags={"WebDev"} Description={"Whatsapp bot to continously check attendance on your behalf and notify you when attendance has reduced!"} Link={"https://wa.me/+918510002438"} Imagelink={"/Assets/Projects/whatsappbot.png"}/>
                <ProjectCard Title={"Presence Checker Device"} Tags={"IOT"} Description={"Simple RaspberryPi with sensors to check presence and push data to Webhook!"} Link={"https://github.com/viralgupta/Auto-Lights-RaspberryPi"} Imagelink={"Assets/Projects/raspberrypi.jpg"}/>
            </div>
        </>
    )
}

export default Projects