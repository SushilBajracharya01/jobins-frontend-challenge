import TableNav from "./TableNav";
import UserInfo from "./UserInfo";

//
import DashCard from "../atoms/DashCard";
import TableUI from "../molecules/TableUI";
import { ORDERS } from "./_data";
import { useMemo } from "react";
import { formatNumber, getStatusClass } from "../../utils/helpers";
import classNames from "classnames";
import dayjs from "dayjs";

/**
 *
 */
export default function PersonalDash() {
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

  return (
    <>
      <DashCard className={"pt-6 px-10"}>
        <UserInfo />

        <TableNav />
      </DashCard>

      <section></section>

      <DashCard>
        <TableUI data={ORDERS} columns={OrderColumn} />
      </DashCard>
    </>
  );
}
