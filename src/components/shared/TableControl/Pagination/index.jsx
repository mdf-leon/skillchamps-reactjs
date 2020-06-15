import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PageButton, Pages } from './style';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const rangeArray = [];

  while (i <= to) {
    rangeArray.push(i);
    i += step;
  }

  return rangeArray;
};

export default function Pagination({
  totalRecords,
  pageLimit,
  pageNeighbours,
  onPageChanged,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalRecords / pageLimit);

  const gotoPage = useCallback(
    (page) => {
      // const { onPageChanged = (f) => f } = props;
      setCurrentPage(Math.max(0, Math.min(page, totalPages)));
    },
    [totalPages]
  );

  useEffect(() => {
    gotoPage(1);
  }, [gotoPage]);

  useEffect(() => {
    const data = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };
    onPageChanged(data);
  }, [currentPage, totalPages, pageLimit, totalRecords, onPageChanged]);

  const handleClick = (page) => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  if (!totalRecords || totalPages === 1) return null;

  const pages = fetchPageNumbers();
  return (
    <Pages>
      <nav aria-label="Pagination">
        {pages.map((page) => {
          if (page === LEFT_PAGE)
            return (
              <PageButton
                key="Previous"
                aria-label="Previous"
                onClick={handleMoveLeft}
              >
                &lt;
              </PageButton>
            );

          if (page === RIGHT_PAGE)
            return (
              <PageButton
                key="Next"
                aria-label="Next"
                onClick={handleMoveRight}
              >
                <span className="sr-only">&gt;</span>
              </PageButton>
            );

          return (
            <PageButton
              key={page.id}
              active={currentPage === page}
              onClick={handleClick(page)}
            >
              {page}
            </PageButton>
          );
        })}
      </nav>
    </Pages>
  );
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pageNeighbours: 0,
  pageLimit: 30,
};
