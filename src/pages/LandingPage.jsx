import React from 'react';
import { Download, Facebook, Twitter, Github, Instagram, Linkedin } from 'lucide-react';
import landingPage from '../assets/landingPage.svg';
const LandingPage = () => {
  return (
    <div className="bg-white ">

      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-2xl mb-4 text-black">
            Hello I'm <span className="text-4xl text-black font-bold ">Nilkumar Patel.</span>
          </h1>
          <h2 className="text-2xl mb-2 text-black">
            Software <span className="text-3xl bg-gray-200 px-2 font-bold ">Developer</span>
          </h2>

          <p className="text-gray-600 mb-8">
            I’m a Computer Science & Engineering graduate student with a passion for backend development and machine learning.
          </p>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/patel-nilkumar/" className="p-2 bg-black text-white rounded-lg"
              target='_blank'>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/Ncoder23" className="p-2 border border-black rounded-lg"
              target='_blank'>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/nil_patel.23/" className="p-2 border border-black rounded-lg"
              target='_blank'>
              <Instagram className="h-6 w-6" />
            </a>


          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="w-full h-[400px] relative">
            <div className="absolute bottom-0 right-0 w-4/5">
              <img src={landingPage} alt="Logo" width={400} height={400} />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;