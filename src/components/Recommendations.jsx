import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const useRecommendations = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>June 2024</Timeline.Time>
          <Timeline.Title>
            Austin Hague, Software Engineer at Microsoft
          </Timeline.Title>
          <Timeline.Body>
            "Allen is a dedicated software engineer, who consistently
            demonstrated strong problem-solving skills and a passion for
            learning. His collaborative mindset and attention to detail make him
            an asset to any team. I highly recommend him for any software
            development role.""
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            View Austin's LinkedIn
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>June 2024</Timeline.Time>
          <Timeline.Title>
            Ryan Case, Software Engineer at Mission Lane
          </Timeline.Title>
          <Timeline.Body>
            "I have been very impressed to watch Allen's growth as a software
            engineer in such a short period of time. He has demonstrated the
            ability to learn new technologies quickly and solve complex problems
            virtually all on his own. He would be a valuable asset to any
            software development team.""
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/ryan-t-case/")
            }
          >
            View Ryan's LinkedIn
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default useRecommendations;
