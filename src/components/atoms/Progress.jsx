export default function Progress({ max = 100, value }) {
  return <progress max={max} value={value} className="" />;
}
