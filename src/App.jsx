import { Routes, Route } from "react-router-dom";

import Home from "./viewer/pages/Home";
import NotFound from "./viewer/pages/NotFound";
import Projects from "./viewer/pages/Projects";
import Project from "./viewer/pages/Project";
import FAQ from "./viewer/pages/FAQ";
import About from "./viewer/pages/About";
import Contact from "./viewer/pages/Contact";
import ViewerLayout from "./viewer/components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewerLayout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="about" element={<About />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
