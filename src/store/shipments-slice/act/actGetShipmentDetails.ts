import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TShipmentsSliceInitialState} from "@/store/shipments-slice/shipmentsSlice.ts";
import axiosErrorHandler from "@/utils/axiosErrorHandler.ts";

const actGetShipmentDetails = createAsyncThunk("getShipmentDetails", async ({trackingNumber}: {trackingNumber: string}, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const url = `https://tracking.bosta.co/shipments/track/${trackingNumber}`;
    const response = await axios.get<TShipmentsSliceInitialState>(url);
    return response.data;
  } catch(error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
});

export default actGetShipmentDetails;