export default function ValueLabelPair({ value, label }) {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-[24px] text-gray-600">{value}</div>
      <div className="text-gray-300 text-[13px] font-medium whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}
