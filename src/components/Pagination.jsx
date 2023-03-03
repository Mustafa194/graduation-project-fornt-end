import { CPagination, CPaginationItem } from "@coreui/react";

const Pagination = () => {
  return (
    <CPagination align="center" aria-label="Page navigation example">
      <CPaginationItem disabled>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  );
};

export default Pagination;
