import { useState } from "react";
import { DateRange } from "react-date-range";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

//
import ChevronDown from "../../assets/svgs/ChevronDown";

/**
 *
 */
export default function DateRangeInput() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <Menu>
      <MenuButton className="text-gray-300 font-medium text-[15px]">
        <span className="flex gap-2">
          Filter by date range <ChevronDown isColorRed={false} />
        </span>
      </MenuButton>
      <MenuItems anchor="bottom end">
        <MenuItem className="border rounded-md overflow-hidden">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
