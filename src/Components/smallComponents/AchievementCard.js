function AchievementCard({ image, name, type, link }) {
    return (
        <>
            <a href={link} target='_blank' rel="noreferrer" className="flex-grow lg:w-1/3 md:w-1/2 w-full pr-2 pb-2">
                <div className="border-gray-200 rounded-lg cursor-pointer hover:border-green-300 duration-200 border flex items-center p-2 h-full overflow-hidden">
                    <img alt="team" className="h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md aspect-video mr-2" src={image} />
                    <div className='flex flex-col md:flex-row'>
                        <div className="flex-grow flex-1">
                            <h2 className="text-gray-100 title-font font-medium">{name}</h2>
                            <p className="text-gray-500 text-sm">{type}</p>
                        </div>
                    </div>
                </div>
            </a>    
        </>
    );
}

export default AchievementCard;
