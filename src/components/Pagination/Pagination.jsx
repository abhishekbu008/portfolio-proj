import { Button, MatIcon, icons } from "../";
import React from "react";
import { arrayToStr } from "../../helpers/helpers";
import { DOTS, usePagination } from "../../hooks/usePagination";

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className = "",
  style = {},
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  const btnClasses = "rounded px-4 py-2 lg:px-3 lg:rounded-sm md:px-3.5 md:py-1.5";
  const iconClasses = "text-sm text-center";

  return (
    <nav className={classNames} style={styles}>
      <ul className="flex gap-3 items-center flex-wrap">
        <li>
          <Button
            className={btnClasses}
            onClick={onPrevious}
            disabled={currentPage === 1}
          >
            <MatIcon className={iconClasses}>{icons.arrow_back_ios}</MatIcon>
          </Button>
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                key={pageNumber}
                className="text-sm font-extrabold tracking-widest"
              >
                &#8230;
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <Button
                className={btnClasses}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            </li>
          );
        })}
        <li>
          <Button
            className={btnClasses}
            onClick={onNext}
            disabled={currentPage === lastPage}
          >
            <MatIcon className={iconClasses}>{icons.arrow_forward_ios}</MatIcon>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Pagination);
