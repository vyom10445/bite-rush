import { useState } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
