export default function PersonalInfo({ label, value }) {
  return (
    <div className="flex xl:gap-4 xl:flex-row flex-col">
      <div className="min-w-[116px] ">{label} </div>
      <div className="font-semibold whitespace-nowrap">{value}</div>
    </div>
  );
}
