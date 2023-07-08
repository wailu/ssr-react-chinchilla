import { Link } from "react-router-dom";
import Duck from "../../components/Duck";

const Home = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Duck />
      <Link to="/about">Go to About page</Link>
    </div>
  );
};

export default Home;
