import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center py-16 px-10 mx-8">
      <div className="w-full md:w-10/12 text-start md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-2">
          Hey, I’m Nilkumar Patel,<br />
          I am a Grad Student at Santa Clara University majoring in Computer Science.<br />
          My Current Technical Toolkit includes:<br />
        </p>
        <div className="flex flex-row space-x-5">
          <ul className="list-disc list-inside text-muted">
            <li>Python</li>

            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Dart</li>
            <li>HTML/CSS</li>
            <li>CI/CD</li>
            <li>AWS</li>
            <li>GCP</li>
          </ul>
          <ul className=" list-inside text-muted">
            <li>: Django, Django Rest Framework, Flask, FastAPI, Tensorflow, Numpy, Pandas</li>
            <li>: React, Redux</li>
            <li>: NodeJS</li>
            <li>: SpringBoot</li>
            <li>: PostgreSQL</li>
            <li>: Firebase, MongoDB</li>
            <li>: Flutter</li>
            <li>: TailwindCSS, MUI</li>
            <li>: Git, Github, GitHub Actions</li>
            <li>: S3, EC2, RDS, EKS, Lamda, API Gateway</li>
            <li>: GKE, Cloud SQL, Cloud Functions, Cloud Run, Cloud Tasks, Big Query, VertexAI</li>
          </ul>
        </div>
        <p className="text-lg mb-4 mt-2">
          I still remember when I was in 2nd year of my undergrad, I watched a show "The Age of AI" hosted by Iron Man[Robert Downey Jr.]. Watching AI being use to solve some of the hardest problems in Transportation, healthcare, climet change and space exploration, I found my calling.
          It inspired me to dive deep into AI long before current AI frenzy.<br />
          As millions of people, I stated my AI journey with Andrew Ng's Machine Learning course on Coursera.<br />
          Since then I have been constantly learning about AI, ML, DL, NLP, CV, GANs, Reinforcement Learning, etc.
        </p>
        <p>
          When I am not bulding something cool, you can find me in the gym, listing to Music, deep into Formula 1, watching movies and TV shows, reaching to mountain tops, or just chilling with friends.
        </p>
      </div>

    </section>
  );
};

export default About;