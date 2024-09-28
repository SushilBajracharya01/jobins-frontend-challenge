import MockAdapter from "axios-mock-adapter";
import { ORDERS } from "./_mock_data";
import axios from "axios";

const mock = new MockAdapter(axios);

mock.onGet("/orders").reply(200, {
  count: ORDERS.length,
  message: "Orders fetched successfully",
  results: ORDERS,
});

export const fetchOrders = () => axios.get("/orders");
