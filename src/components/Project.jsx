import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const ProjectComponent = ({ project }) => {
  return (
    <div className="card mt-4 border-1">
      <div className="card-body">
        <h5 className="card-title">
          {project.project.name} (<span>{project.project.year}</span>)
        </h5>
        <div>
          <h6 key={project.college.id}>College: {project.college.name}</h6>
          <h6 key={project.department.id}>
            Department: {project.department.name}
          </h6>
        </div>
        <div>
          <p>{project.project.description}</p>
        </div>
        <hr />
        <dl className="row mb-0">
          <dt className="col-sm-3">supervisor</dt>
          <dd className="col-sm-9" key={project.supervisor.id}>
            {project.supervisor.fullName}
          </dd>
          <dt className="col-sm-3 text-truncate">Students</dt>
          <dd className="col-sm-9 mb-0">
            <ul className="list-inline">
              {project.students.map((student) => (
                <>
                  <li className="list-inline-item" key={student.id}>
                    {student.fullName}
                  </li>
                  <span className="h4" key={nanoid()}>
                    |
                  </span>
                </>
              ))}
            </ul>
          </dd>
        </dl>

        {/* <div className="text-center">
          <Link to={`/projects/${project.project.id}`} className="btn btn-dark">
            See Detail
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectComponent;
