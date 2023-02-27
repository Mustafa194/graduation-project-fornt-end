import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
