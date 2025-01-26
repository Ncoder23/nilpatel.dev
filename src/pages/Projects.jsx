const Projects = () => {
    const projectList = [
        {
            title: "HackVok: Multilingual TikTok Clone",
            description: "Developed a multilingual TikTok clone using AI for real-time video translation.",
            technologies: "Flutter, Flask, Firebase, HuggingFace, PyTorch",
            link: "https://devpost.com/software/hackvok-multilingual-tiktok-clone",
        },
        {
            title: "AI Job Recommendation System",
            description: "Designed an AI-powered job recommendation system with backend microservices.",
            technologies: "React, TailwindCSS, Spring Boot, AWS",
            link: "https://github.com/Ncoder23/Job-Board-AI",
        },
        {
            title: "Concert Ticket Sales System",
            description: "Constructed a multithreaded ticketing system in C++ for seat allocation.",
            technologies: "C++, pthreads, Mutex Locks",
            link: "https://github.com/Ncoder23/Concert-Ticket-Sales-System",
        },
        {
            title: "PersonalAI Insight",
            description: "Created a personal AI clone with efficient data retrieval and conversational capabilities.",
            technologies: "Langchain, OpenAI API, ChromaDB, Google Cloud",
            link: "https://github.com/Ncoder23/klaus",
        },
        {
            title: "HackVok: Multilingual TikTok Clone",
            description: "Developed a multilingual TikTok clone using AI for real-time video translation.",
            technologies: "Flutter, Flask, Firebase, HuggingFace, PyTorch",
            link: "https://devpost.com/software/hackvok-multilingual-tiktok-clone",
        },
        {
            title: "AI Job Recommendation System",
            description: "Designed an AI-powered job recommendation system with backend microservices.",
            technologies: "React, TailwindCSS, Spring Boot, AWS",
            link: "https://github.com/Ncoder23/Job-Board-AI",
        },
        {
            title: "Concert Ticket Sales System",
            description: "Constructed a multithreaded ticketing system in C++ for seat allocation.",
            technologies: "C++, pthreads, Mutex Locks",
            link: "https://github.com/Ncoder23/Concert-Ticket-Sales-System",
        },
        {
            title: "PersonalAI Insight",
            description: "Created a personal AI clone with efficient data retrieval and conversational capabilities.",
            technologies: "Langchain, OpenAI API, ChromaDB, Google Cloud",
            link: "https://github.com/Ncoder23/klaus",
        },
    ];

    return (
        <section id="projects" className="py-16 px-6 ">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                    <div key={index} className="bg-accent p-6 shadow rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-2">{project.description}</p>
                        <p className="text-gray-600 text-sm mb-4">Technologies: {project.technologies}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;