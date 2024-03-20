import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { Indicators } from "src/models";

interface IndicatorsState {
  indicator: Indicators | undefined;
  dtFrom: string | null;
  dtTo: string | null;
}

const initialState: IndicatorsState = {
  indicator: undefined,
  dtFrom: dayjs().toString(),
  dtTo: dayjs().add(1, "day").toString(),
};

const indicatorSlice = createSlice({
  name: "indicators",
  initialState,
  reducers: {
    setIndicator: (state, action) => {
      state.indicator = action.payload;
    },
    setDates: (state, action) => {
      const [from, to] = action.payload;
      state.dtFrom = from ? from.toISOString() : null;
      state.dtTo = to ? to.toISOString() : null;
    },
  },
});

export const { setIndicator, setDates } = indicatorSlice.actions;

export default indicatorSlice.reducer;
