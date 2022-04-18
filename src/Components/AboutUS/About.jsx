import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-24">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-gray-900 font-medium title-font tracking-wider text-lg">
              Md. Ahasan Habib Sany
            </h1>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <p className="leading-relaxed text-lg">
              <p>
                I am a CSE student. I am a tech enthusiast. Love to learn new
                technologies. My long term goal is to be a Full Stack Software
                Engineer
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
