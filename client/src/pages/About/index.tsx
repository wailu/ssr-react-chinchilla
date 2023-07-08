import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>This is the about page</div>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default About;
