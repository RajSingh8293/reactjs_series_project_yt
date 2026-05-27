import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css"
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/product/:id",
      element: <SingleProduct />
    },
    {
      path: "/profile",
      element:
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
    }

  ])


  return <RouterProvider router={router} />
  // <BrowserRouter>
  //   <Header />
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/contact" element={<Contact />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/login" element={<Login />} />
  //   </Routes>
  // </BrowserRouter>




}

export default App;