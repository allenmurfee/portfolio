import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiExternalLink } from "react-icons/hi";

const useRecommendations = () => {
  return (
    <div className="w-3/5">
      <h2 className="text-left text-amber-200 text-2xl mb-4 font-bold">
        Recommendations
      </h2>
      <Timeline className="p-4">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-slate-200">June 2024</Timeline.Time>
            <Timeline.Title className="text-amber-200">
              Austin Hague, Software Engineer at Microsoft
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              "Allen is a dedicated software engineer, who consistently
              demonstrated strong problem-solving skills and a passion for
              learning. His collaborative mindset and attention to detail make
              him an asset to any team. I highly recommend him for any software
              development role."
            </Timeline.Body>
            <Button
              color="gray"
              className="outline outline-sky-300"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/austinhague/")
              }
            >
              View Austin's LinkedIn
              <HiExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="flex flex-col items-start">
            <Timeline.Time className="text-slate-200">June 2024</Timeline.Time>
            <Timeline.Title className="text-amber-200">
              Ryan Case, Software Engineer at Mission Lane
            </Timeline.Title>
            <Timeline.Body className="text-white text-left">
              "I have been very impressed to watch Allen's growth as a software
              engineer in such a short period of time. He has demonstrated the
              ability to learn new technologies quickly and solve complex
              problems virtually all on his own. He would be a valuable asset to
              any software development team."
            </Timeline.Body>
            <Button
              color="gray"
              className="outline outline-sky-300"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ryan-t-case/")
              }
            >
              View Ryan's LinkedIn
              <HiExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default useRecommendations;
