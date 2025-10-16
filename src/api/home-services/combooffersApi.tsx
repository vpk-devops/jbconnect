import axiosInstance from "../axiosInstance";

//  Get all combooffers
export const getAllCombooffers = () =>{
     return axiosInstance.get("/homeservices/combos");
}