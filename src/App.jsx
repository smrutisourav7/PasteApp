import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Paste from "./components/Paste.jsx";
import ViewPaste from "./components/ViewPaste.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
