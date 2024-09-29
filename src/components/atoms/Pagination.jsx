import PaginationBtn from "./PaginationBtn";

//
import ChevronLeft from "../../assets/svgs/ChevronLeft";
import ChevronRight from "../../assets/svgs/ChevronRightt";

/**
 *
 */
export default function Pagination({ pagination, totalCount, table }) {
  const totalPage = Math.ceil(totalCount / pagination.pageSize);
  const pages = Array.from({ length: totalPage }, (_, i) => i);

  const lastPage = pages.length - 1;

  const handleOnPageNoClick = (page) => {
    table.setPageIndex(page);
  };

  const handleOnLeftClick = () => {
    table.setPageIndex(0);
  };

  const handleOnRighClick = () => {
    table.setPageIndex(lastPage);
  };

  return (
    <div className="flex gap-0.5">
      <PaginationBtn
        label={<ChevronLeft />}
        onClick={handleOnLeftClick}
        disabled={pagination.pageIndex === 0}
      />
      {pages.map((page) => (
        <PaginationBtn
          key={page}
          isActive={page === pagination.pageIndex}
          label={page + 1}
          onClick={() => handleOnPageNoClick(page)}
        />
      ))}
      <PaginationBtn
        label={<ChevronRight />}
        onClick={handleOnRighClick}
        disabled={pagination.pageIndex === lastPage}
      />
    </div>
  );
}
