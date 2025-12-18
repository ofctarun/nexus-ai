import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import './App.css';
import GptSearch from "./components/GptSearch";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/search",
      element: <GptSearch/>
    }
  ])


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App;
