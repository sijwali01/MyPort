import React from "react";
import { TypeAnimation } from "react-type-animation";

const Body = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded shadow-2xl"
              alt="hero"
              src="src\assets\IMG_20220113_113748_778-removebg.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "HELLO -- I'm MANISH SIJWALI",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "HELLO -- I'm MANISH SIJWALI FRONTEND - DEVELOPER",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "0.9em", display: "block", color:"grey"}}
                repeat={Infinity}
              />
            </h6>
            <p className="mb-8 leading-relaxed">
              Aspiring front-end developer with a strong foundation in HTML,
              CSS, and JavaScript, complemented by hands-on experience with
              React. Passionate about creating responsive and user-friendly web
              interfaces. I have developed several projects, including a dynamic
              e-commerce website and a personal portfolio, showcasing my skills
              in web development and design. Seeking an opportunity to
              contribute to a dynamic team where I can grow and apply my
              expertise in front-end technologies. Eager to bring creativity and
              problem-solving skills to impactful projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
