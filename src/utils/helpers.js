export function formatNumber(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function getStatusClass(value) {
  if (value === "Completed") {
    return "text-green-500";
  }
  if (value === "Pending") {
    return "text-yellow-500";
  }
  if (value === "Canceled") {
    return "text-red-500";
  }
}
