const Pagination = ({ filters, setFilters }) => {
  return (
    <div className="d-grid gap-2 col-12 col-lg-8 mx-auto mt-5">
      <button
        className="btn btn-outline-dark"
        type="button"
        // onClick={() => setPage(page + 1)}
      >
        Load more
      </button>
    </div>
  );
};

export default Pagination;
