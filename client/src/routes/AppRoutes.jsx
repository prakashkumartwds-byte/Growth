import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import WebDevelopment from "../pages/WebDevelopment";
import DigitalMarketing from "../pages/DigitalMarketing";
import GraphicsDesigning from "../pages/GraphicsDesigning";
import VideoEditing from "../pages/VideoEditing";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/web-development" element={<WebDevelopment />} />

      <Route path="/digital-marketing" element={<DigitalMarketing />} />

      <Route path="/graphics-designing" element={<GraphicsDesigning />} />

      <Route path="/video-editing" element={<VideoEditing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<SingleBlog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
