import React from 'react';

// import PythonIcon from "../assets/skills/python.svg?react";
// import JavascriptIcon from "../assets/skills/javascript.svg?react";
// import JavaIcon from "../assets/skills/java.svg?react";
// import GoIcon from "../assets/skills/go.svg?react";
// import DjangoIcon from "../assets/skills/django.svg?react";
// import ReactIcon from "../assets/skills/react.svg?react";
// import GitIcon from "../assets/skills/git.svg?react";

// const skills = {
//     frontend: [
//         { name: 'JavaScript', icon: <JavascriptIcon height={70} width={70} />, highlight: true },
//         { name: 'Java', icon: <JavaIcon height={70} width={70} /> },
//         { name: 'Django', icon: <DjangoIcon height={70} width={70} /> },
//         { name: 'JavaScript', icon: <JavascriptIcon height={70} width={70} />, highlight: true },
//         { name: 'Java', icon: <JavaIcon height={70} width={70} /> },
//         { name: 'Django', icon: <DjangoIcon height={70} width={70} /> },
//     ],
//     backend: [
//         { name: 'Go', icon: <GoIcon height={70} width={70} /> },
//         { name: 'React', icon: <ReactIcon height={70} width={70} /> },
//     ],
//     tools: [
//         { name: 'Python', icon: <PythonIcon height={70} width={70} /> },
//         { name: 'Git', icon: <GitIcon height={70} width={70} /> },
//     ],
// };

// const Skills = () => {
//     return (
//         <section className="bg-white">
//             <div className="mx-auto">
//                 {/* <h2 className="text-4xl font-bold mb-8">
//                     My <span className="text-black font-extrabold">Skills</span>
//                 </h2> */}

//                 {/* Frontend Skills */}
//                 <div className="mb-5">
//                     <h3 className="text-2xl font-semibold text-black ml-20 mb-3">Frontend</h3>
//                     <div className="grid grid-cols-10 sm:grid-cols-6 lg:grid-cols-10 gap-3 ml-20">
//                         {skills.frontend.map((skill, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex flex-col items-center border-2 border-black justify-center transition-transform hover:scale-105 bg-white text-black`}
//                             >
//                                 <div className="text-3xl mb-2 mt-2">{skill.icon}</div>
//                                 <div >{skill.name}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Backend Skills */}
//                 <div className="mb-5">
//                     <h3 className="text-2xl font-semibold text-black ml-20 mb-3">Backend</h3>
//                     <div className="grid grid-cols-10 sm:grid-cols-6 lg:grid-cols-10 gap-3 ml-20">
//                         {skills.backend.map((skill, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex flex-col items-center border-2 border-black justify-center transition-transform hover:scale-105 ${skill.highlight ? 'bg-black text-white' : 'bg-white text-black'
//                                     }`}
//                             >
//                                 <div className="text-3xl mb-2 mt-2">{skill.icon}</div>
//                                 <div >{skill.name}</div>

//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Tools */}
//                 <div className="mb-5">
//                     <h3 className="text-2xl font-semibold text-black ml-20 mb-3">Tools</h3>
//                     <div className="grid grid-cols-10 sm:grid-cols-6 lg:grid-cols-10 gap-3 ml-20">
//                         {skills.tools.map((skill, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex flex-col items-center border-2 border-black justify-center transition-transform hover:scale-105 ${skill.highlight ? 'bg-black text-white' : 'bg-white text-black'
//                                     }`}
//                             >
//                                 <div className="text-3xl mb-2 mt-2">{skill.icon}</div>
//                                 <div >{skill.name}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;
const Skills = () => {
    return (
        <section id="skills" className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="flex overflow-x-auto space-x-6">
                {/* Repeat for each skill */}
                <div className="flex-shrink-0 w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    <span className="text-lg font-semibold">HTML</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;