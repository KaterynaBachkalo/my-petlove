import { FC } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setCurrentPage } from "../redux/pet/petSlice";
import { selectCurrentPage } from "../redux/pet/selectors";

interface IProps {
  totalItems: number;
}

const Pagination: FC<IProps> = ({ totalItems }) => {
  const dispatch = useDispatch<AppDispatch>();

  const currentPage = useSelector(selectCurrentPage);

  const limit = 6;

  const totalPages = Math.max(1, Math.ceil(totalItems / limit));

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const handlePageClick = (event: { selected: number }) => {
    handlePageChange(event.selected + 1);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
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
        onClick={() => handlePageChange(totalPages)}
      >
        {`>>`}{" "}
      </button>
    </div>
  );
};

export default Pagination;
