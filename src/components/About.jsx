// import { useState } from "react";
import UserImg from "../assets/image.png";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Fade right>
      <section className="max-w-screen-md mx-auto" id="about">
        <h2 className="text-center mb-6 font-bold text-4xl">About Me..!</h2>

        <div className="flex flex-col gap-6 mx-auto w-full">
          <a href="" className="mx-auto">
            <img src={UserImg} alt="photo" className="w-60" />
          </a>
          <div className=" px-4">
           <p className="text-left text-lg">
            Heya..! This is Sanjana Reddy, I am currently pursuing my Masters in Computer Science at SLU.
To work in a learning and challenging environment, utilizing my skills and knowledge to the best of my abilities and contribute positively to the growth of the organization as well as my personal growth.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default About;
