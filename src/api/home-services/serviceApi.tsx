import axiosInstance from "../axiosInstance";

//  Get all services
export const getAllServices = () =>{
     return axiosInstance.get("homeservices/services");
}
//  Get services by subcategory ID
export const getServicesBySubcategoryId = (subCategoryId: string) =>
{
   return axiosInstance.get(`/homeservices/subcategories/${subCategoryId}/services`);
}

//  Get services by subcategory name
export const getServicesBySubcategoryName = (name: string) =>{
 return axiosInstance.get(`/homeservices/subcategories/name/${name}/services`);
}

//  Get service by name
export const getServiceByName = (name: string) =>{
    return axiosInstance.get(`/homeservices/services/name/${name}`);
}

