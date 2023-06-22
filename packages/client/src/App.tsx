import Home from "./pages/Home";
import { createRoot } from "react-dom/client";

const App = () => {
  return <Home />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
