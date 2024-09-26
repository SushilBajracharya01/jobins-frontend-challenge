export default function SectionTitle({ minimize, title }) {
  if (minimize) {
    return <hr className="my-[15px] mx-[30px]" />;
  }
  return (
    <p className="text-xs font-bold text-gray-300 py-[15px] px-[30px]">
      {title}
    </p>
  );
}
