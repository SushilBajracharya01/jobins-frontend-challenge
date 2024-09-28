export default function SelectUI({ name, options }) {
  return (
    <select name={name} aria-label="Product status">
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
