import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";

//
import Pagination from "../atoms/Pagination";

/**
 *
 */
export default function TableUI({
  data,
  columns,
  rowCount,
  loading,
  totalCount,
  pagination,
  setPagination,
  noItemMessage,
}) {
  const table = useReactTable({
    data: data,
    columns,
    rowCount: rowCount,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border-spacing-x-4">
        <thead className="border-b border-b-gray-150">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="mx-4">
              {headerGroup.headers.map((header, i) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={classNames("py-4 text-start", {
                      "pl-4": i === 0,
                      "pr-4": i === headerGroup.headers.length - 1,
                    })}
                  >
                    {header.isPlaceholder ? null : (
                      <span className="px-5 text-gray-300 uppercase font-medium text-[13px]">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.length > 0 && !loading ? (
            rows.map((row) => {
              const visibleCells = row.getVisibleCells();
              return (
                <tr
                  key={row.id}
                  className="px-4 py-3 border-b border-b-gray-200"
                >
                  {visibleCells.map((cell, i) => {
                    return (
                      <td
                        key={cell.id}
                        className={classNames(
                          "px-5 py-[18px] text-[15px] text-gray-600",
                          {
                            "pl-9": i === 0,
                            "pr-9": i === visibleCells.length - 1,
                          }
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : loading ? (
            <>
              {Array.from({ length: 5 }).map((_, idx) => (
                <tr key={idx} className="px-4 py-3 border-b border-b-gray-200">
                  {columns.map((_, idx) => (
                    <td
                      key={idx}
                      className="px-5 py-[18px] text-[15px] text-gray-600"
                    >
                      <span className="animate-pulse">
                        <span class="h-4 bg-gray-200 rounded-full w-full block"></span>
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-3 text-gray-300 bg-gray-100 font-medium"
              >
                {noItemMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {pagination && (
        <div className="flex items-center justify-between gap-2 py-4 px-6">
          <div className="flex items-center text-gray-300 gap-2">
            Showing
            {totalCount < pagination.pageSize ? (
              <span className="">
                all <span className="ml-1">{totalCount}</span>
              </span>
            ) : (
              <>
                <label
                  className="py-[10px] px-5 border border-gray-150 rounded-md text-gray-600"
                  htmlFor="pageSize"
                >
                  <select
                    name="pageSize"
                    id="pageSize"
                    value={pagination.pageSize}
                    className="outline-none"
                    onChange={(e) => {
                      table.setPageSize(e.target.value);
                    }}
                  >
                    {PAGE_SIZES.map(({ label, value }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                of {totalCount}
              </>
            )}
          </div>

          <div>
            <Pagination
              table={table}
              totalCount={totalCount}
              pagination={pagination}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const PAGE_SIZES = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
];
