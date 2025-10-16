import { createAsyncThunk } from "@reduxjs/toolkit";
import { Agent } from "./agentTypes";
import * as agentApi from "../../../api/home-services/agentApi"; 

// Get all agents
export const fetchAgents = createAsyncThunk<Agent[]>(
  "agents/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await agentApi.getAgents();
      // console.log("agents",res.data.data)
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch agents");
    }
  }
);

// Get agent by ID
export const fetchAgentById = createAsyncThunk<Agent, string>(
  "agents/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await agentApi.getAgentById(id);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch agent");
    }
  }
);

// Get agents by name
export const fetchAgentsByName = createAsyncThunk<Agent[], string>(
  "agents/fetchByName",
  async (name, { rejectWithValue }) => {
    try {
      const res = await agentApi.getAgentsByName(name);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch agents by name");
    }
  }
);
// / Fetch agents by profession
export const fetchAgentsByProfession = createAsyncThunk(
  "agents/fetchByProfession",
  async (profession: string, { rejectWithValue }) => {
    try {
      const response = await agentApi.getAgentsByProfession(profession);
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const fetchAgentsByCategoryId = createAsyncThunk(
  "agents/fetchByCategoryId",
  async (categoryId: string, { rejectWithValue }) => {
    try {
      const response = await agentApi.getAgentsByCategoryId(categoryId);
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Get recommended agents
export const fetchRecommendedAgents = createAsyncThunk<Agent[]>(
  "agents/fetchRecommended",
  async (_, { rejectWithValue }) => {
    try {
      const res = await agentApi.getRecommendedAgents();
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch recommended agents");
    }
  }
);
