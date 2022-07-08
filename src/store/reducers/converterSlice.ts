import { createSlice } from "@reduxjs/toolkit";
import { ConverterPayload, ConverterType } from "../models";
import { Dispatch } from "redux";
import axios from "axios";

interface InitialStateI {
  loading: boolean;
  converter: Record<string, ConverterType>;
  error: string | null;
}

const initialState: InitialStateI = {
  loading: false,
  converter: {},
  error: null,
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    converterLoading(state) {
      state.loading = true;
    },
    converterSuccess(state, action) {
      state.converter = {
        result: action.payload,
      },
      state.loading = false;
    },
    converterFail(state, action) {
      state.loading = false,
      state.error = action.payload;
    },
  },
});

export const { converterLoading, converterSuccess, converterFail } =
  converterSlice.actions;

// can be done through createAsyncThunk
export const fetchConverterRates =
  ({ currencyTo, currencyFrom, amount }: ConverterPayload) =>
  async (dispatch: Dispatch<any>) => {
    dispatch(converterLoading());

    try {
      await axios
        .get(
          `https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount}&apikey=yl7BtSfZz5OvkkNC8CkzRHSYMtt4dBOX`
        )
        .then((response) => dispatch(converterSuccess(response.data.result)));
    } catch (e: any) {
      dispatch(converterFail(e.message));
    }
  };

export default converterSlice.reducer;
