import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  <p>
                    Frontend Developer Trainee (September 2023 - March 2024)
                    <br />
                    From - Qspider’s Chandigarh
                  </p>
                </h2>
                <p className="leading-relaxed">
                  <li>
                    Completed a rigorous Frontend Developer training program at
                    Qspider’s Chandigarh Offline, focusing on HTML, CSS,
                    JavaScript, and ReactJS frameworks.
                  </li>
                  <li>
                    Demonstrated proficiency in building responsive and
                    interactive user interfaces using modern frontend
                    technologies, gaining practical experience in frontend
                    development concepts and frameworks.
                  </li>
                  <li>
                    Collaborated effectively with peers and mentors, actively
                    engaging in practical projects and problem-solving ses-
                    sions to enhance my skills and understanding of front-end
                    development practices.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  <p>
                    Web Development Internship (March 2024 - April 2024)
                    <br />
                    From - VeriTech Software IT Services
                  </p>
                </h2>
                <p className="leading-relaxed">
                  <li>
                    Engaged in practical projects under the guidance of senior
                    developers, honing skills in frontend development with HTML,
                    CSS, and JavaScript to create visually appealing and
                    responsive user interfaces.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to troubleshoot
                    issues, implement feature enhancements, and optimize website
                    performance, gaining valuable experience in agile
                    development practices and version control systems like Git.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
