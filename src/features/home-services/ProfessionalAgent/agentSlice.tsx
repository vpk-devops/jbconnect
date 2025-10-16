import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAgents,
  fetchAgentById,
  fetchAgentsByName,
  fetchRecommendedAgents,
  fetchAgentsByProfession,
  fetchAgentsByCategoryId,
} from "./agentThunk";
import { Agent } from "./agentTypes";

interface AgentState {
  agents: Agent[];
  currentAgent?: Agent;
  loading: boolean;
  error?: string | null;
}

const initialState: AgentState = {
  agents: [],
  currentAgent: undefined,
  loading: false,
  error: null,
};

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ✅ Fetch All
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    //Fetch By ID
    builder
      .addCase(fetchAgentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgentById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAgent = action.payload;
      })
      .addCase(fetchAgentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch By Name
    builder
      .addCase(fetchAgentsByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgentsByName.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAgentsByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch By Profession
    builder
      .addCase(fetchAgentsByProfession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgentsByProfession.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAgentsByProfession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch By CategoryId
    builder
      .addCase(fetchAgentsByCategoryId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgentsByCategoryId.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAgentsByCategoryId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    //Fetch Recommended
    builder
      .addCase(fetchRecommendedAgents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchRecommendedAgents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default agentSlice.reducer;
