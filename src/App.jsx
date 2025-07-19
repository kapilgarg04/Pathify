import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/landing";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  return (
    <>
      <div className="App"></div>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
