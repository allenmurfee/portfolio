import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiExternalLink } from "react-icons/hi";

const useEducation = () => {
  return (
    <div id="education" className="w-full md:w-1/3">
      <h2 className="text-left text-amber-200 text-3xl mb-4 font-bold">
        Education
      </h2>
      <Timeline className="p-4">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-left text-slate-200">
              August 2022 - February 2023
            </Timeline.Time>
            <Timeline.Title className="text-left text-amber-200">
              Certificate in Software Development
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              University of Richmond, Final Grade: A+
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-left text-slate-200">
              August 2018 - May 2020
            </Timeline.Time>
            <Timeline.Title className="text-left text-amber-200">
              Bachelor's Degree, Public Relations
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              Virginia Tech, 3.8 GPA
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-left text-slate-200">
              August 2017 - August 2018
            </Timeline.Time>
            <Timeline.Title className="text-left text-amber-200">
              Associate Degree, General Studies
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              John Tyler Community College, 4.0 GPA
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default useEducation;
