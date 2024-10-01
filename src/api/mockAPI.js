import MockAdapter from "axios-mock-adapter";
import { ORDERS } from "./_mock_data";
import { callAPI } from "./apiInstance";
import {
  getParams,
  isAfterOrSameDay,
  isBeforeOrSameDay,
} from "../utils/helpers";

const mock = new MockAdapter(callAPI, { delayResponse: 600 });

const ordersUri = "/orders";
const url = new RegExp(`${ordersUri}*`);

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

mock.onGet("/dash").reply(200, {
  message: "Orders fetched successfully",
  data: {
    sales: {
      total: "350000",
      difference: "8560",
      isPositive: true,
    },
    profit: {
      total: "50000",
      difference: "12%",
      isPositive: true,
    },
    countryStats: [
      {
        id: "US",
        countryName: "United States",
        isPositive: true,
        percent: 25.8,
        value: 30000,
      },
      {
        id: "BR",
        countryName: "Brazil",
        isPositive: false,
        percent: 16.2,
        value: 26000,
      },
      {
        id: "AU",
        countryName: "Australia",
        isPositive: false,
        percent: 11.9,
        value: 17000,
      },
    ],
  },
});
export const fetchDashInfo = () => {
  return callAPI.get("/dash");
};

// fetch userInfo data
