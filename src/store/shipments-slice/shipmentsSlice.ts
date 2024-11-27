import {createSlice} from "@reduxjs/toolkit";
import actGetShipmentDetails from "./act/actGetShipmentDetails.ts";

export type TShipmentsSliceInitialState = {
  CurrentStatus: {
    state: string,
    timestamp: string,
  },
  PromisedDate: string,
  TrackingNumber: string,
  TransitEvents: {
    state: string,
    timestamp: string,
    hub?: string
  }[],
  SupportPhoneNumbers: string[],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: string | null,
}

const initialState: TShipmentsSliceInitialState = {
  CurrentStatus: {
    state: "",
    timestamp: "",
  },
  PromisedDate: "",
  TrackingNumber: "",
  TransitEvents: [],
  SupportPhoneNumbers: [],
  loading: "idle",
  error: null,
}


const shipmentsSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetShipmentDetails.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })

      .addCase(actGetShipmentDetails.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.CurrentStatus = action.payload.CurrentStatus;
        state.PromisedDate = action.payload.PromisedDate;
        state.TrackingNumber = action.payload.TrackingNumber;
        state.TransitEvents = action.payload.TransitEvents;
        state.SupportPhoneNumbers = action.payload.SupportPhoneNumbers
      })

      .addCase(actGetShipmentDetails.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string
      })
  }
})

export {actGetShipmentDetails}

export default shipmentsSlice.reducer