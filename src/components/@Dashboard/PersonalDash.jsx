import dayjs from "dayjs";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { DateRange } from "react-date-range";

//
import UserInfo from "./UserInfo";

//
import DashCard from "../atoms/DashCard";
import TableUI from "../molecules/TableUI";
import SelectUI from "../molecules/SelectUI";
import TableNavItem from "../atoms/TableNavItem";

//
import { ORDERS, TABLE_NAV_ITEMS, PRODUCT_STATUS } from "./_data";
import { formatNumber, getStatusClass } from "../../utils/helpers";

//
import SearchIcon from "../../assets/svgs/SearchIcon";
import ChevronDown from "../../assets/svgs/ChevronDown";

const initialState = {
  status: "all",
  search: "",
  date: {
    from: "",
    to: "",
  },
};
/**
 *
 */
export default function PersonalDash() {
  const [activeTab, setActiveTab] = useState("all-orders");
  const [filter, setFilter] = useState(initialState);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

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
          return <span>{dayjs(date).format("D MMMM, YYYY")}</span>;
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

  const handleTabNavClick = (value) => setActiveTab(value);

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

      <section className="flex gap-4 justify-between">
        <div className="flex gap-4">
          <div className="rounded-[6px] bg-white px-4 py-2 text-gray-300 font-medium text-[15px] flex gap-2">
            Status:
            <SelectUI options={PRODUCT_STATUS} value={filter.status} />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-[6px] bg-white pl-4 pr-8 py-2 text-gray-300 font-medium text-[15px]"
            />
            <SearchIcon className="absolute top-2.5 right-2" />
          </div>
        </div>

        <div>
          <div className="rounded-[6px] bg-white px-4 py-2">
            <button className="text-gray-300 font-medium text-[15px]">
              <span className="flex gap-2">
                Filter by date range <ChevronDown isColorRed={false} />
              </span>
            </button>

            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>
        </div>
      </section>

      <DashCard>
        <TableUI data={ORDERS} columns={OrderColumn} />
      </DashCard>
    </>
  );
}
