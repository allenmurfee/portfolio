import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiExternalLink } from "react-icons/hi";

const useEducation = () => {
  return (
    <div>
      <h2 className="text-left text-amber-200 text-2xl mb-4 font-bold">
        Education
      </h2>
      <Timeline className="p-4">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-slate-200">
              August 2022 - February 2023
            </Timeline.Time>
            <Timeline.Title className="text-amber-200">
              Certificate in Software Development
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              University of Richmond, 4.0 GPA
            </Timeline.Body>
            {/* <Button
              color="gray"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/austinhague/")
              }
            >
              View Austin's LinkedIn
              <HiExternalLink className="ml-2 h-5 w-5" />
            </Button> */}
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-slate-200">
              August 2018 - May 2020
            </Timeline.Time>
            <Timeline.Title className="text-amber-200">
              Bachelor's Degree, Public Relations
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              Virginia Tech, 3.8 GPA
            </Timeline.Body>
            {/* <Button
              color="gray"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ryan-t-case/")
              }
            >
              View Ryan's LinkedIn
              <HiExternalLink className="ml-2 h-5 w-5" />
            </Button> */}
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-slate-200">
              August 2017 - August 2018
            </Timeline.Time>
            <Timeline.Title className="text-amber-200">
              Associate Degree, Mass Communications
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              John Tyler Community College, 4.0 GPA
            </Timeline.Body>
            {/* <Button
              color="gray"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ryan-t-case/")
              }
            >
              View Ryan's LinkedIn
              <HiExternalLink className="ml-2 h-5 w-5" />
            </Button> */}
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default useEducation;
