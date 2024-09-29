import format from "date-fns/format";
import { DateRange } from "react-date-range";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

//
import ChevronDown from "../../assets/svgs/ChevronDown";

/**
 *
 */
export default function DateRangeInput({
  from,
  to,
  onChange,
  handleOnClearClick,
}) {
  const state = [
    {
      startDate: from,
      endDate: to,
      key: "selection",
    },
  ];
  return (
    <Menu>
      <MenuButton>
        {({ close }) => {
          const onClearClick = (event) => {
            event.stopPropagation();
            close?.();
            handleOnClearClick();
          };
          return (
            <>
              {!(from && to) && (
                <span className="text-gray-300 font-medium text-xl flex gap-2">
                  Filter by date range <ChevronDown isColorRed={false} />
                </span>
              )}
              {from && to && (
                <span className="text-gray-300  flex gap-2">
                  <span className="py-1 px-2 text-xs border border-gray-100">
                    {format(new Date(from), "MMM dd, yyyy")}
                  </span>
                  <span className="py-1 px-2 text-xs border border-gray-100">
                    {format(new Date(to), "MMM dd, yyyy")}
                  </span>
                  <button
                    className="py-1 px-2 text-xs text-white bg-red-500 cursor-pointer rounded"
                    onClick={onClearClick}
                  >
                    Cancel
                  </button>
                </span>
              )}
            </>
          );
        }}
      </MenuButton>
      <MenuItems anchor="bottom end">
        <MenuItem className="border rounded-md overflow-hidden">
          <DateRange
            editableDateInputs={true}
            // onChange={(item) => setState([item.selection])}
            onChange={onChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
