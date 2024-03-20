import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { Indicators } from "src/models";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCurrentIndicator = () =>
  useAppSelector<Indicators | undefined>((state) => state.indicators.indicator);

export const useIndicatorDates = () =>
  useAppSelector<[Date | null, Date | null]>((state) => [
    state.indicators.dtFrom ? new Date(state.indicators.dtFrom) : null,
    state.indicators.dtTo ? new Date(state.indicators.dtTo) : null,
  ]);

export const useToken = () => useAppSelector((state) => state.auth.token);
