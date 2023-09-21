import React from 'react'

const Projects = () => {
    return (
        <>
            <br />
            <br />
            <div className="project-heading text-3xl font-mono font-extrabold mb-8">
                <strong className="text-green-100">Projects </strong> I have made
            </div>
            <div className="flex flex-wrap">
                <div className="xl:w-1/4 md:w-1/2 pr-2 pb-2">
                    <div className="bg-black bg-opacity-30 p-1 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="Assets/Projects/digibooking.png" alt="content" />
                        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">Webdev IOT</h3>
                        <a href='https://github.com/viralgupta/digi-booking' target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">DigiBooking</a>
                        <p className="leading-relaxed text-base">Event booking website, Using face data to book images, Your Face will be your Tickets! Made using AWS Rekognition.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 pr-2 pb-2">
                    <div className="bg-black bg-opacity-30 p-1 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="Assets/Projects/chess.png" alt="content" />
                        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">WebDev</h3>
                        <a href='https://github.com/viralgupta/chess' target='_blank' rel="noreferrer" className="text-lg hover:text-blue-500 text-green-100 font-medium title-font mb-4">Real Time Chess Website</a>
                        <p className="leading-relaxed text-base">Chess Website where you can search people, accept/reject requests to play, Made using Socket.io</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 pr-2 pb-2">
                    <div className="bg-black bg-opacity-30 p-1 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="Assets/Projects/yso.png" alt="content" />
                        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">WebDev</h3>
                        <a href='https://youtube-subscription-only.vercel.app/' target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">Youtube Subscription Only</a>
                        <p className="leading-relaxed text-base">Simple website to get your Youtube Subscription Feed, to help you get over distractions, Implemented using OAuth2.0</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 pr-2 pb-2">
                    <div className="bg-black bg-opacity-30 p-1 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Assets/Projects/whatsappbot.png" alt="content" />
                        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">WebDev</h3>
                        <a href='https://wa.me/+918510002438' target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">Whatsapp Attendance Bot</a>
                        <p className="leading-relaxed text-base">Whatsapp bot to continously check attendance on your behalf and notify you when attendance has reduced!</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 pr-2 pb-2">
                    <div className="bg-black bg-opacity-30 p-1 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="Assets/Projects/raspberrypi.jpg" alt="content" />
                        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">IOT</h3>
                        <a href='https://github.com/viralgupta/Auto-Lights-RaspberryPi' target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">Presence Checker Device</a>
                        <p className="leading-relaxed text-base">Simple RaspberryPi with sensors to check presence and push data to Webhook!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects