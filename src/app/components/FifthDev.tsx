import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";

// Reusable FeatureCard Component
interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  comments: number;
}

function FeatureCard({ image, title, description, date, comments }: FeatureCardProps) {
  return (
    <div className="w-full max-w-[360px] shadow-md bg-white rounded-lg">
      <div
        className="w-full h-[200px] md:h-[300px] bg-cover bg-center bg-no-repeat rounded-t-lg transition-all duration-300 hover:scale-105"
        style={{ backgroundImage: `url('./images/${image}')` }}
          // Added alt text for accessibility
      ></div>
      <div className="p-4">
        <ul className="flex items-center justify-between text-sm text-gray-500">
          <li>
            <span className="text-primary">Google</span>
          </li>
          <li>Trending</li>
          <li>New</li>
        </ul>

        <h3 className="text-dark-blue text-lg md:text-2xl font-medium mt-4">
          {title}
        </h3>
        <p className="text-gray text-sm md:text-base mt-2">{description}</p>

        {/* Details */}
        <div className="flex items-center justify-between mt-4 text-gray text-sm">
          <div className="flex items-center">
            <TfiAlarmClock className="text-primary mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <VscGraphLine className="text-secondary mr-1" />
            {comments} comments
          </div>
        </div>

        {/* Feature Button */}
        <div className="flex items-center justify-center text-gray text-lg font-extrabold mt-4 cursor-pointer">
          Learn More <IoIosArrowForward className="text-primary ml-2" />
        </div>
      </div>
    </div>
  );
}

function FifthDev() {
  return (
    <div>
      {/* Sixth Section */}
      <div className="w-full flex flex-col items-center justify-between mb-20 px-4">
        <span className="text-primary text-sm font-extrabold">Practice Advice</span>
        <h3 className="text-dark-blue text-xl md:text-2xl font-extrabold tracking-wider mt-2">
          Featured Posts
        </h3>
        <p className="text-gray text-sm md:text-base w-full md:w-2/3 lg:w-1/3 text-center mt-2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>

        {/* Features Cards Container */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 py-12 px-6 transition-all duration-300 hover:scale-105">
          {/* Map through the feature data */}
          {[
            { image: "feature1.jpg", title: "Loudest à la Madison #1 (Lintegral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 },
            { image: "feature2.jpg", title: "Loudest à la Madison #2 (Lintegral)", description: "Optimizing performance and user experience with thoughtful design.", date: "23 April 2021", comments: 15 },
            { image: "feature3.jpg", title: "Loudest à la Madison #3 (Lintegral)", description: "Focusing on innovation and simplicity in every product.", date: "24 April 2021", comments: 5 }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              date={feature.date}
              comments={feature.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FifthDev;
