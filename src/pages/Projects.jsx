import ProjectComponent from "./../components/Project";
import Pagination from "./../features/projects/components/Pagination";
import Filters from "./../features/projects/components/Filters";

const projects = [
  {
    id: 1,
    title: "Title",
    year: new Date().getFullYear(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    supervisor: {
      id: 1,
      fullName: "M. Saja Attallah Mohammed",
    },
    students: [
      {
        id: 1,
        fullName: "Mustafa Ahmed",
      },
      {
        id: 2,
        fullName: "Yousif Qadir",
      },
      {
        id: 3,
        fullName: "Mohammed Zrar",
      },
    ],
  },
  {
    id: 2,
    title: "Title",
    year: new Date().getFullYear(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    supervisor: {
      id: 1,
      fullName: "M. Saja Attallah Mohammed",
    },
    students: [
      {
        id: 4,
        fullName: "Mustafa Ahmed",
      },
      {
        id: 5,
        fullName: "Yousif Qadir",
      },
      {
        id: 6,
        fullName: "Mohammed Zrar",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-3 bg-dark-subtle" id="projects">
      <Filters />

      <div className="container d-flex flex-wrap justify-content-center">
        <div className="cards col-12 col-lg-8">
          {projects.map((project) => (
            <ProjectComponent project={project} key={project.id} />
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
