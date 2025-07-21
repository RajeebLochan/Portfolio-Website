import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">
              &gt; whoami <br />
              I’m Rajeeb build stories with logic.
            </p>
            <p className="subtext mb-4 ">
              Passionate Python developer & data enthusiast. I build AI tools,
              analyze data, and turn ideas into reality — from face recognition
              to chat analyzers. Currently learning React & building my dream
              SaaS. Always hacking. Always learning.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="mb-3">
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-teal-400 text-xl mr-2">✨</span> My Reads
            </h2>
            <p className="text-sm text-slate-300 mt-1 mb-4">
              Fuel for My Soul & Skills
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center  rounded-md max-h-64 overflow-hidden">
              <img
                src="assets/gita.png"
                alt="Gita"
                className="h-64 object-contain"
              />
            </div>
            <div className="flex justify-center items-center  rounded-md max-h-64 overflow-hidden">
              <img
                src="assets/python-book.jpg"
                alt="Python Data Science Handbook"
                className="h-64 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I am from Earth, ready to work worldwide</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <h3 className="text-xl font-bold text-white mb-4">
            📦 Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
          <div>
            <ul>📊 Data Analysis & Dashboards</ul>
            <ul>🤖 Custom AI/ML Prototypes</ul>
            <ul>🌐 Full‑Stack Web Development</ul>
            <ul>🛡️ Cybersecurity Audits</ul>
            <ul>⚙️ Automation & Scripting</ul>
            <ul>🗄️ Database Design & Management</ul>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
            I work with a range of languages, frameworks, and tools to craft scalable and reliable applications tailored for performance and usability.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
