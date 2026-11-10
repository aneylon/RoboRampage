import NewsList from "../News/NewsList";
import BugReport from "./BugReport";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Making a full stack JavaScript game for fun and...profit?</p>
      <BugReport />
      <NewsList />
    </div>
  );
};

export default About;
