import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-accent p-6 shadow rounded-lg">
                    <h3 className="text-xl font-semibold">Full Stack Engineer</h3>
                    <p className="">Santa Clara University, Santa Clara, CA</p>
                    <p className="">April 2024 - Present</p>
                    <ul className="list-disc pl-6 ">
                        <li>Developed a mobile application using Firebase and React.</li>
                        <li>Integrated real-time map functionality with OpenStreetMap.</li>
                    </ul>
                </div>
                <div className="bg-accent p-6 shadow rounded-lg">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <p className="">Advancedware Technologies Pvt. Ltd., Gujarat, India</p>
                    <p className="">November 2021 - March 2023</p>
                    <ul className="list-disc pl-6 ">
                        <li>Developed web applications using React and Django.</li>
                        <li>Streamlined CI/CD workflows using GitHub Actions.</li>
                        <li>Implemented RestFul APIs with Django Rest Framework.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;