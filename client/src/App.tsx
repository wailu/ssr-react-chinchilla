import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(
  () => import(/* webpackChunkName: "pages_home" */ "./pages/Home")
);
const About = lazy(
  () => import(/* webpackChunkName: "pages_about" */ "./pages/About")
);

const App = () => {
  useEffect(() => {
    console.log("App mounted");
  }, []);

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
