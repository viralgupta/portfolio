
const ProjectCard = ({Title, Tags, Description, Link, Imagelink}) => {
    return (
        <a href={Link} target='_blank' rel="noreferrer" className="xl:w-1/4 md:w-1/2 w-full md:pr-2 pb-2">
            <div className="bg-black bg-opacity-50 p-1 rounded-lg h-full">
                {window.innerWidth < 768 && <a href={Link} target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">{Title}</a>}
                {window.innerWidth < 768 && <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">{Tags}</h3>}
                <img className="h-40 rounded w-full object-cover object-center my-2 md:my-0" src={Imagelink} alt="content" />
                {window.innerWidth >= 768 && <a href={Link} target='_blank' rel="noreferrer" className="text-lg hover:text-blue-700 text-green-100 font-medium title-font mb-4">{Title}</a>}
                {window.innerWidth >= 768 && <h3 className="tracking-widest text-green-500 text-xs font-medium title-font mb-2">{Tags}</h3>}
                <p className="leading-relaxed text-base">{Description}</p>
            </div>
        </a>
    )
}

export default ProjectCard