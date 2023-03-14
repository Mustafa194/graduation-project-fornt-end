import { useEffect, useRef, useState } from "react";

import ProjectComponent from "./../components/Projects/Project";
import Pagination from "./../components/Projects/Pagination";
import Filters from "./../components/Projects/Filters";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(null);
  const filtersRef = useRef();

  useEffect(() => {
    console.log("use effect");
    const fetchData = async () => {
      try {
        const { data: projectData } = await axios.get(
          "http://localhost:4444/projects"
        );
        setData(projectData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-3 bg-dark-subtle" id="projects">
      <Filters setFilters={setFilters} filtersRef={filtersRef} />

      <div className="container d-flex flex-wrap justify-content-center">
        <div className="cards col-12 col-lg-8">
          {/* {projectsData.map((project) => (
            <ProjectComponent project={project} key={project.project.id} />
          ))} */}
        </div>

        <div className="d-grid gap-2 col-12 col-lg-8 mx-auto mt-5">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Projects;
