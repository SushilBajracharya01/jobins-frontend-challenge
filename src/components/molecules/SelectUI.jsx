import { Select } from "@headlessui/react";

export default function SelectUI({ name, options }) {
  return (
    <Select name="status" aria-label="Product status">
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
}
