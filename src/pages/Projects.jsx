import ProjectComponent from "./../components/Project";
import Pagination from "./../components/Pagination";
import Filters from "./../components/Filters";
// import asyncHandler from "./../utils/asyncHandler";
import useFetch from "./../hooks/useFetch";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const { data, fetchError, isLoading } = useFetch(
    "http://localhost:4444/projects",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11c3RhZmFhaG1lZG1hbmFnZXIiLCJpYXQiOjE2Nzc2NTExMjAsImV4cCI6MTY3NzczNzUyMH0.3Rrmn6N-75qlXf5F6XIdF9HeXdGA03TaM3M0uGX2zIM"
  );

  useEffect(() => {
    console.log("useEffect");
    if (Object.keys(data).length !== 0) {
      setProjects(
        data.projects.map((project) => {
          return {
            college: {
              id: project.Department.College.id,
              name: project.Department.College.name,
            },
            department: {
              id: project.Department.id,
              name: project.Department.name,
            },
            students: project.Students.map((student) => {
              return {
                id: student.id,
                fullName: student.Person.fullName,
              };
            }),
            supervisor: {
              id: project.Supervisor.id,
              fullName: project.Supervisor.Person.fullName,
            },
            project: {
              year: project.year,
              name: project.name,
              description: project.description,
            },
          };
        })
      );
    }
  }, [data]);

  console.log(data);
  // console.log(projects);

  return (
    <section className="py-3 bg-dark-subtle" id="projects">
      <Filters />

      <div className="container d-flex flex-wrap justify-content-center">
        <div className="cards col-12 col-lg-8">
          {projects.map((project) => (
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
