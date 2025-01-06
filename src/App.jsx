import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Portifolio from "./Portifolio/Portifolio"
import ErrorPage from "./errorPage/errorPage"
export default function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path:"home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "Portifolio", element: <Portifolio /> },
        { path: "*", element:<ErrorPage/> }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}