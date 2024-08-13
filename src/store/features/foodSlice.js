import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://threew-academy.onrender.com/api/";
const initialState = {
  listFoods: [],
  loading: false,
  error: "",
};

export const getfoods = createAsyncThunk("foods/getfoods", async () => {
  const response = await axios.get(BASE_URL + "foods");
  return response?.data;
});

export const deletefoods = createAsyncThunk("foods/deletefood", async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/food/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
/*******************Edit Food*********************** */

export const editfood = createAsyncThunk("foods/editfood", async ({id , changeinfo}) => {
    try {
      const response = await axios.put(`${BASE_URL}/food/${id}`,changeinfo);
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

/**************************************************** */

/*********************Add food********************** */

  export const addfood = createAsyncThunk("foods/addfood", async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/food`,data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

/****************************************************** */

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder
      .addCase(getfoods.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getfoods.fulfilled, (state, action) => {
        state.loading = false;
        state.listFoods = action.payload;
      })
      .addCase(getfoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deletefoods.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletefoods.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.listFoods.indexOf(
          (item) => item._id == action.payload._id
        );
        state.listFoods.splice(index, 1)
      })
      .addCase(deletefoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    /**************Edit food************** */

      .addCase(editfood.pending, (state, action) => {
        state.loading = true;
      })
       .addCase(editfood.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.listFoods.findIndex(
           (item) => item._id == action.payload._id
         );
         state.listFoods[index]= action.payload
      })
       .addCase(editfood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    /***************Add Food***************** */

      .addCase(addfood.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addfood.fulfilled, (state, action) => {
        state.loading = false;
        state.listFoods.push(action.payload)
      })
      .addCase(addfood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    /****************************************** */

      
  },
});

export default foodSlice.reducer;
