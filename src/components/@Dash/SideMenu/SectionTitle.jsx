export default function SectionTitle({ minimize, title }) {
  if (minimize) {
    return <hr className="my-2.5 mx-4.5" />;
  }
  return (
    <p className="text-xs font-bold text-gray-300 py-2.5 px-4.5">{title}</p>
  );
}
