import ProjectCard from './smallComponents/ProjectCard'
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const getProject = async () => {
        const url = `https://api.github.com/search/repositories?q=topic:portfolio+user:viralgupta`;
        const response = await fetch(url);
        const data = await response.json()
        data.items.sort((a, b) => { const dateA = new Date(a.created_at); const dateB = new Date(b.created_at); return dateB - dateA; });
        const SortedProjects = data.items.map(obj => ({ ...obj, topics: obj.topics.filter(topic => topic !== "portfolio") }));
        SortedProjects.forEach(async (project) => {
            const response2 = await fetch(`https://api.github.com/repos/viralgupta/${project.name}/contents/README.md`);
            const data2 = await response2.json()
            const content = atob(data2.content)
            const regexlink = /!\[Screenshot[^)]*\]\(([^)]*)\)/;
            const matches = regexlink.exec(content);
            let link;
            if (matches) {
                link = matches[1]
            }
            else {
                link = "https://dummyimage.com/723x403"
            }
            const text = content.split('![Screenshot')[0]
            setProjects(p => [...p, {
                name: project.name.replace('-', ' '),
                tags: project.topics.join(' ').toUpperCase(),
                Description: text,
                link: project.homepage !== "" ? project.homepage : project.html_url,
                imageLink: link
            }])
        });
    }

    useEffect(() => {
        getProject()
    }, [])

    return (
        <>
            <br />
            <div className="project-heading text-xl md:text-3xl font-mono font-extrabold mb-3 md:mb-8">
                <strong className="text-green-100">Projects </strong> I have made
            </div>
            <div className="flex flex-wrap md:px-5">
                {projects.length > 0 ?
                    projects.map((project, index) => {
                        return <ProjectCard key={index} Title={project.name} Tags={project.tags} Description={project.Description} Link={project.link} Imagelink={project.imageLink} />
                    })
                    : <dir className="font-bold text-3xl">Loading Projects...</dir>
                }
            </div>
        </>
    )
}

export default Projects