import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";

export default function TableUI({
  data,
  columns,
  rowCount,
  pagination,
  setPagination,
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

  return (
    <div className="w-full">
      <table className="w-full border-collapse border-spacing-x-4">
        <thead className="border-b border-b-gray-150">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="mx-4">
              {headerGroup.headers.map((header, i) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={classNames({
                      "pl-4": i === 0,
                      "pr-4": i === headerGroup.headers.length - 1,
                    })}
                  >
                    {header.isPlaceholder ? null : (
                      <span className="py-4 px-5 text-gray-300 uppercase font-medium text-[13px]">
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
          {table.getRowModel().rows.map((row) => {
            const visibleCells = row.getVisibleCells();
            return (
              <tr key={row.id} className="px-4 py-3 border-b border-b-gray-200">
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
          })}
        </tbody>
      </table>
    </div>
  );
}
