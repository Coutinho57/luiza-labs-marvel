import React from 'react';
import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron_left.svg';
import { ReactComponent as ChevronRight } from 'src/assets/icons/chevron_right.svg';
import { Container, Paper, PaperChevron } from './styles';

export interface IPaginationProps {
  totalCountOfRegisters?: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

function Pagination({
  totalCountOfRegisters = 1,
  currentPage = 1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPageChange = () => {},
  registerPerPage = 10,
}: IPaginationProps) {
  const siblingsCount = 2;

  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <Container>
      <PaperChevron
        onClick={() => currentPage - 1 !== 0 && onPageChange(currentPage - 1)}
        style={currentPage - 1 === 0 ? { cursor: 'unset' } : undefined}
      >
        <ChevronLeft />
      </PaperChevron>

      {currentPage > 1 + siblingsCount && (
        <>
          <Paper onClick={() => onPageChange(1)}>1</Paper>
          {currentPage > 2 + siblingsCount && (
            <Paper style={{ cursor: 'unset' }}>...</Paper>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map(page => (
          <Paper onClick={() => onPageChange(page)} key={`nextPages-${page}`}>
            {page}
          </Paper>
        ))}
      <Paper selected>{currentPage}</Paper>
      {nextPages.length > 0 &&
        nextPages.map(page => (
          <Paper onClick={() => onPageChange(page)} key={`nextPages-${page}`}>
            {page}
          </Paper>
        ))}
      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <Paper style={{ cursor: 'unset' }}>...</Paper>
          )}
          <Paper onClick={() => onPageChange(lastPage)}>{lastPage}</Paper>
        </>
      )}
      <PaperChevron
        onClick={() =>
          currentPage !== lastPage &&
          currentPage < lastPage &&
          onPageChange(currentPage + 1)
        }
        style={currentPage >= lastPage ? { cursor: 'unset' } : undefined}
      >
        <ChevronRight />
      </PaperChevron>
    </Container>
  );
}

export { Pagination };
