import classNames from "classnames";
import format from "date-fns/format";
import { useEffect, useMemo, useState } from "react";

//
import DashCard from "../atoms/DashCard";
import TableUI from "../molecules/TableUI";
import SelectUI from "../molecules/SelectUI";
import TableNavItem from "../atoms/TableNavItem";
import UserInfo from "./UserInfo";

//
import useDebounce from "../../hooks/useDebounce";

//
import { TABLE_NAV_ITEMS, PRODUCT_STATUS } from "./_data";
import {
  formatNumber,
  getFormatedDate,
  getStatusClass,
} from "../../utils/helpers";

//
import SearchIcon from "../../assets/svgs/SearchIcon";
import DateRangeInput from "../molecules/DateRangeInput";

//
import { fetchOrders } from "../../api/mockAPI";

const initialState = {
  status: "All",
  date: {
    from: null,
    to: null,
  },
};
/**
 *
 */
export default function PersonalDash() {
  const [activeTab, setActiveTab] = useState("All");
  const [filters, setFilters] = useState(initialState);

  const [inputText, setInputText] = useState("");
  const debouncedSearchInput = useDebounce(inputText);

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    async function handleFetchOrders() {
      try {
        setIsTableLoading(true);
        const response = await fetchOrders({
          offset: `${pagination.pageIndex * pagination.pageSize}`,
          limit: (+pagination.pageIndex + 1) * pagination.pageSize,
          status: filters.status,
          search: debouncedSearchInput,
          from: filters.date.from ? getFormatedDate(filters.date.from) : null,
          to: filters.date.to ? getFormatedDate(filters.date.to) : null,
        });
        setData(response.results);
        setTotalCount(response.count);
        setIsTableLoading(false);
      } catch (error) {
        console.log(error, "error");
        setIsTableLoading(false);
      }
    }
    handleFetchOrders();
  }, [filters, debouncedSearchInput, activeTab, pagination]);

  const OrderColumn = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
        cell: (info) => {
          return <span>#{info.getValue()}</span>;
        },
      },
      {
        header: "Customer",
        accessorKey: "customer",
      },
      {
        header: "Date",
        accessorKey: "date",
        cell: (info) => {
          let date = new Date(info.getValue());
          return <span>{format(date, "d MMMM, yyyy")}</span>;
        },
      },
      {
        header: "Total",
        accessorKey: "total",
        cell: (info) => {
          return <span>{formatNumber(info.getValue())}</span>;
        },
      },
      {
        header: "Method",
        accessorKey: "method",
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          let value = info.getValue();
          return (
            <span
              className={classNames("font-semibold", getStatusClass(value))}
            >
              {value}
            </span>
          );
        },
      },
      {
        header: "Action",
        accessorKey: "action",
        cell: (info) => {
          return <button className="text-blue-500">View Details</button>;
        },
      },
    ],
    []
  );

  const handleTabNavClick = (value) => {
    setActiveTab(value);
    setFilters({
      ...filters,
      status: value,
    });
  };

  const handleOnStatusChange = (event) => {
    let value = event.target.value;

    if (["All", "Pending"].includes(value)) {
      setActiveTab("All");
    } else {
      setActiveTab(value);
    }

    setFilters({
      ...filters,
      status: value,
    });
  };

  const onDateChange = (item) => {
    setFilters({
      ...filters,
      date: {
        ...filters.date,
        from: item.selection.startDate,
        to: item.selection.endDate,
      },
    });
  };

  const handleOnDateClearClick = () => {
    setFilters({
      ...filters,
      date: {
        from: null,
        to: null,
      },
    });
  };
  return (
    <>
      <DashCard className={"pt-6 px-10"}>
        <UserInfo />

        <div className="flex flex-wrap">
          {TABLE_NAV_ITEMS.map(({ label, value }) => (
            <TableNavItem
              key={value}
              label={label}
              value={value}
              isActive={value === activeTab}
              handleOnClick={handleTabNavClick}
            />
          ))}
        </div>
      </DashCard>

      <section className="flex gap-4 justify-between flex-col flex-wrap md:flex-row">
        <div className="flex gap-4 flex-col flex-wrap md:flex-row">
          <div className="rounded-[6px] bg-white px-4 py-2 text-gray-300 font-medium text-xl flex justify-start items-center gap-2">
            Status:
            <SelectUI
              name="status"
              options={PRODUCT_STATUS}
              value={filters.status}
              onChange={handleOnStatusChange}
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-[6px] bg-white pl-4 pr-8 py-2 text-gray-300 font-medium text-xl w-full"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
            <SearchIcon className="absolute top-2.5 right-2" />
          </div>
        </div>

        <div>
          <div className="rounded-[6px] bg-white px-4 py-2">
            <DateRangeInput
              from={filters.date.from}
              to={filters.date.to}
              onChange={onDateChange}
              handleOnClearClick={handleOnDateClearClick}
            />
          </div>
        </div>
      </section>

      <DashCard>
        <TableUI
          data={data}
          columns={OrderColumn}
          pagination={pagination}
          setPagination={setPagination}
          totalCount={totalCount}
          loading={isTableLoading}
          noItemMessage={"No any orders"}
        />
      </DashCard>
    </>
  );
}
