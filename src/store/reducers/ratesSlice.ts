import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import axios from "axios";
import { RatesPayload } from "../models/index";

interface InitialStateI {
  loading: boolean;
  data: Record<any, RatesPayload>;
  error: string | null;
}

const initialState: InitialStateI = {
  loading: false,
  data: {},
  error: null,
};

const ratesSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    ratesLoading(state) {
      state.loading = true;
    },
    ratesSuccess(state, action) {
      state.loading = false,
      state.data = {
          rates: action.payload,
      };
    },
    ratesFail(state, action) {
      state.loading = false,
      state.error = action.payload;
    },
  },
});

export const { ratesLoading, ratesSuccess, ratesFail } = ratesSlice.actions;

// can be done through createAsyncThunk
export const fetchRates =
  (baseCurrency: string) => async (dispatch: Dispatch<any>) => {
    dispatch(ratesLoading());

    try {
      await axios
        .get(
          `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,EUR,GBP,USD&base=${baseCurrency}&apikey=yl7BtSfZz5OvkkNC8CkzRHSYMtt4dBOX`
        )
        .then((response) => dispatch(ratesSuccess(response.data.rates)));
    } catch (e: any) {
      dispatch(ratesFail(e.message));
    }
  };

export default ratesSlice.reducer;
