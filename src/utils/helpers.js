import format from "date-fns/format";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isSameDay from "date-fns/isSameDay";

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

export function slugToTitle(slug) {
  return slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getParams(queryString) {
  let params = {};
  let query = queryString.split("?")[1];

  query.split("&").forEach((pair) => {
    let [key, value] = pair.split("=");
    params[key] = value;
  });

  return params;
}

export function getFormatedDate(date) {
  return format(date, "yyyy-MM-dd");
}

export function isAfterOrSameDay(date1, date2) {
  return isAfter(date1, date2) || isSameDay(date1, date2);
}
export function isBeforeOrSameDay(date1, date2) {
  return isBefore(date1, date2) || isSameDay(date1, date2);
}

export function formatNumberWithSuffix(num) {
  if (num >= 1e9) {
    return { number: (num / 1e9).toFixed(2).replace(/\.00$/, ""), suffix: "B" };
  } else if (num >= 1e6) {
    return { number: (num / 1e6).toFixed(2).replace(/\.00$/, ""), suffix: "M" };
  } else if (num >= 1e3) {
    return { number: (num / 1e3).toFixed(2).replace(/\.00$/, ""), suffix: "K" };
  } else {
    return { number: num, suffix: "" };
  }
}
