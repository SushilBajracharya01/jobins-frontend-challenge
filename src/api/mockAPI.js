import MockAdapter from "axios-mock-adapter";
import { ORDERS } from "./_mock_data";
import { callAPI } from "./apiInstance";
import {
  getParams,
  isAfterOrSameDay,
  isBeforeOrSameDay,
} from "../utils/helpers";

const mock = new MockAdapter(callAPI, { delayResponse: 600 });

const usersUri = "/orders";
const url = new RegExp(`${usersUri}*`);

mock.onGet(url).reply(function (config) {
  const params = getParams(config.url); // offset: 0, limit: 10

  let data = [...ORDERS];

  if (params.status !== "All") {
    data = data.filter((d) => d.status === params.status);
  }
  if (params.search) {
    data = data.filter(
      (d) =>
        d.customer.toLowerCase().includes(params.search.toLowerCase()) ||
        d.id.toString().includes(params.search)
    );
  }
  if (params.from) {
    data = data.filter((d) =>
      isAfterOrSameDay(new Date(d.date), new Date(params.from))
    );
  }
  if (params.to) {
    data = data.filter((d) =>
      isBeforeOrSameDay(new Date(d.date), new Date(params.to))
    );
  }

  return [
    200,
    {
      count: data.length,
      message: "Orders fetched successfully",
      results: data.slice(params.offset, params.limit),
    },
  ];
});

export const fetchOrders = (filters) => {
  const searchParams = new URLSearchParams();

  if (filters?.offset) searchParams.append("offset", filters.offset);
  if (filters?.limit) searchParams.append("limit", filters.limit);
  if (filters?.status) searchParams.append("status", filters.status);
  if (filters?.search) searchParams.append("search", filters.search);
  if (filters?.from) searchParams.append("from", filters.from);
  if (filters?.to) searchParams.append("to", filters.to);

  return callAPI.get(`/orders?${searchParams}`);
};
