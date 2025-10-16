import axiosInstance from "../axiosInstance";

// 1. Get all agents
export const getAgents = () => {
  return axiosInstance.get("/homeservices/agents");
};

// 2. Get agent by ID
export const getAgentById = (id: string) => {
  return axiosInstance.get(`/homeservices/agents/${id}`);
};

// 3. Get agents by name
export const getAgentsByName = (name: string) => {
  return axiosInstance.get(`/homeservices/agents/name/${name}`);
};
// Get agents by profession
export const getAgentsByProfession = (profession: string) => {
  return axiosInstance.get(`/homeservices/agents/by-profession?profession=${profession}`);
};


// Get agents by categoryId
export const getAgentsByCategoryId = (categoryId: string) => {
  return axiosInstance.get(`/homeservices/agents/by-category-id?categoryId=${categoryId}`);
};

// 5. Get recommended agents
export const getRecommendedAgents = () => {
  return axiosInstance.get("/homeservices/agents/recommended");
};

