const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#projects">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#projects">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#projects">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#projects">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#projects">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
