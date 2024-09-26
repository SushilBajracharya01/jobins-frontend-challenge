import TableNavItem from "../atoms/TableNavItem";

export default function TableNav() {
  return (
    <div className="flex flex-wrap">
      {TABLE_NAV_ITEMS.map(({ label }) => (
        <TableNavItem key={label} label={label} />
      ))}
    </div>
  );
}

const TABLE_NAV_ITEMS = [
  {
    label: "All Orders",
  },
  {
    label: "Completed",
  },
  {
    label: "Canceled",
  },
];
