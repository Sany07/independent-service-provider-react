import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Checkout from "./Components/Checkout/Checkout.jsx";
import Toaster from "./Components/Toaster/Toaster";
import RequireAuth from "./Utilities/RequireAuth";
import Blog from "./Components/Blog/Blog";
import About from "./Components/AboutUS/About";
import NotFound from "./Components/NotFound/NotFound";
import NewsLetters from "./Components/NewsLetter/NewsLetters";
function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NewsLetters />

      <Footer />
    </>
  );
}

export default App;
