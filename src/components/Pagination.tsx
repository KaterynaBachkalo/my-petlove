import { FC } from "react";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../redux/pet/petSlice";

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
}

const Pagination: FC<IProps> = ({
  totalPages,
  onPageChange,
  currentPage,
  totalItems,
}) => {
  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected); // Pass the selected page to the parent
  };
  const getLastPageNumber = (n: number) => {
    return n % 10 === 0 ? n / 10 - 1 : Math.floor(n / 10);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(0)}
        className="first-page"
      >
        {`<<`}{" "}
      </button>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
        nextClassName={`next ${
          currentPage >= totalPages - 1 ? "disabled" : ""
        }`}
      />
      <button
        disabled={currentPage === getLastPageNumber(totalItems)}
        className="last-page"
        onClick={() => setCurrentPage(getLastPageNumber(totalItems))}
      >
        {`>>`}{" "}
      </button>
    </div>
  );
};

export default Pagination;
