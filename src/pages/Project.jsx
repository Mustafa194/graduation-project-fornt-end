import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import useFetch from "./../hooks/useFetch";

const Project = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, fetchError, isLoading } = useFetch(
    `http://localhost:4444/projects/${id}`
  );

  if (!id || !data || fetchError || data?.status === "404") navigate("/404");

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setProject(data.project);
    }
  }, [data]);

  return (
    <>
      <h2 className="h2 text-center p-3 m-3">{project.name}</h2>

      <p className="fs-3 lg-base">{project.description}</p>
    </>
  );
};

export default Project;
