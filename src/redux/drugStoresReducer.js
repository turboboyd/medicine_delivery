import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "util/const";


export const fetchDrugStores = createAsyncThunk(
  "drugStores/fetchDrugStores",
  async ({ page = 1, pageSize = 20 }, thunkAPI) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/drug-stores/?page=${page}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении списка аптек:", error);
      throw error;
    }
  }
);

export const fetchMedicines = createAsyncThunk(
  "medicines/fetchMedicines",
  async ({ id, page = 1, pageSize = 20 }, thunkAPI) => {
    console.log("id: ", id);
    try {
      const response = await fetch(
        `${API_BASE_URL}/drug-stores/${id}/medicines?page=${page}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении списка Лекарств:", error);
      throw error;
    }
  }
);

const initialState = {
  providers: { currentPage: 1, totalPages: 0, totalData: 0, data: [] },
  medicines: { currentPage: 1, totalPages: 0, totalData: 0, data: [] },
  isLoading: false,
  error: null,
};

const drugStoresSlice = createSlice({
  name: "drugStores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugStores.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDrugStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.providers = action.payload;
      })
      .addCase(fetchDrugStores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMedicines.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMedicines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.medicines = action.payload;
      })
      .addCase(fetchMedicines.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});



export default drugStoresSlice.reducer;
export const drugStoresReducer = drugStoresSlice.reducer;

