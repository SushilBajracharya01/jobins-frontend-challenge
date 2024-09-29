export default function SelectUI({ name, value, options, onChange }) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
