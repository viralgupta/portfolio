
const ProjectCard = ({Title, Tags, Description, Link, Imagelink}) => {
    return (
        <div className="xl:w-1/4 md:w-1/2 pr-2 pb-2">
            <div className="bg-black bg-opacity-30 p-1 rounded-lg h-full">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={Imagelink} alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">{Tags}</h3>
                <a href={Link} target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">{Title}</a>
                <p className="leading-relaxed text-base">{Description}</p>
            </div>
        </div>
    )
}

export default ProjectCard