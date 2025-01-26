import React from 'react';
const courses = {
    "Santa Clara University": [
        "Design & Analysis of Algorithms",
        "Advanced Operating Systems",
        "Object Oriented Programming",
        "Machine Learning",
        "Deep Learning",
        "Arificial Intelligence",
    ],
    "Gujarat Technological University": [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Architecture",
        "Software Process Management",
        "Web Technologies",
        "Database Management Systems",
    ],
}

const Education = () => {
    return (
        <section id="education" className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="flex flex-row justify-around ">
                <div className="bg-accent p-6 shadow rounded-lg">
                    <h3 className="text-xl font-semibold">Santa Clara University</h3>
                    <p className="text-gray-700">Master of Science in Computer Science & Engineering</p>
                    <p className="text-gray-600">April 2023 - March 2025</p>
                    <ul className="list-disc list-inside text-muted">
                        {courses['Santa Clara University'].map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-accent p-6 shadow rounded-lg">
                    <h3 className="text-xl font-semibold">Gujarat Technological University</h3>
                    <p className="text-gray-700">Bachelor of Engineering in Information Technology</p>
                    <p className="text-gray-600">June 2018 - May 2022</p>
                    <ul className="list-disc list-inside text-muted">
                        {courses['Gujarat Technological University'].map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Education;