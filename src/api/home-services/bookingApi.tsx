import axiosInstance from "../axiosInstance";

// 1. Create a new order
export const createOrder = (orderData: any) => {
  return axiosInstance.post("/homeservices/orders", orderData);
};

// 2. Get all orders for admin
export const getAllOrders = () => {
    console.log("getAllOrders",getAllOrders)
  return axiosInstance.get("homeservices//orders");

};

// 3. Get single order by ID
export const getOrderById = (id: string) => {
  return axiosInstance.get(`/homeservices/orders/${id}`);
};



