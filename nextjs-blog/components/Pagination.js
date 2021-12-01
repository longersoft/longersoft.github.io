import React from "react";

const Pagination = ({ page, totalPage, onPageClick }) => {
  return (
    <nav class="pagination">
      <span
        onClick={() => onPageClick(page - 1)}
        class={`page-numbers prev${page === 1 ? " inactive" : ""}`}
      >
        Prev
      </span>
      {new Array(totalPage).fill(undefined).map((_, index) => {
        const pageNum = index + 1;
        return (
          <span
            onClick={() => onPageClick(pageNum)}
            class={`page-numbers${pageNum === page ? " current" : ""}`}
          >
            {pageNum}
          </span>
        );
      })}
      <span
        onClick={() => onPageClick(page + 1)}
        class={`page-numbers next${page >= totalPage ? " inactive" : ""}`}
      >
        Next
      </span>
    </nav>
  );
};

export default Pagination;
