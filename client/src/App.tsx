import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My app</title>
      </head>
      <body>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </body>
    </html>
  );
};

export default App;
