import { FC } from "react";
import ReactPaginate from "react-paginate";

interface IProps {
  totalItems: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

const Pagination: FC<IProps> = ({ totalItems, currentPage, onPageChange }) => {
  const limit = 6;

  const totalPages = Math.max(1, Math.ceil(totalItems / limit));

  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
        className="first-page"
      >
        {`<<`}{" "}
      </button>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={<span>...</span>}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage - 1}
        nextClassName={`next ${
          currentPage >= totalPages - 1 ? "disabled" : ""
        }`}
      />
      <button
        disabled={currentPage === totalPages}
        className="last-page"
        onClick={() => onPageChange(totalPages)}
      >
        {`>>`}{" "}
      </button>
    </div>
  );
};

export default Pagination;
