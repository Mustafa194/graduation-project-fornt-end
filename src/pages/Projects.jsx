import { useEffect, useRef, useState } from "react";

import ProjectComponent from "./../components/Project";
import Pagination from "./../components/Pagination";
import Filters from "./../components/Filters";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(null);
  const filtersRef = useRef();

  useEffect(() => {
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

  useEffect(() => {
    if (!filters || Object.keys(filters).length === 0) {
      setProjectsData(projects);
      filtersRef.current.scrollIntoView();
    } else {
      const filteredProjects = projects.filter(
        (project) =>
          (filters?.search && project.project.name.includes(filters.search)) ||
          (filters?.year && project.project.year === filters.year) ||
          (filters?.college && project.college.id === filters.college) ||
          (filters?.department && project.department.id === filters.department)
      );

      setProjectsData(
        projects.filter(
          (project) => filters?.year && project.project.year === filters.year
        )
      );

      console.log(filteredProjects);

      setProjectsData(filteredProjects);
    }
  }, [filters]);

  return (
    <section className="py-3 bg-dark-subtle" id="projects">
      <Filters setFilters={setFilters} filtersRef={filtersRef} />

      <div className="container d-flex flex-wrap justify-content-center">
        <div className="cards col-12 col-lg-8">
          {projectsData.map((project) => (
            <ProjectComponent project={project} key={project.project.id} />
          ))}
        </div>

        <div className="d-grid gap-2 col-12 col-lg-8 mx-auto mt-5">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Projects;
