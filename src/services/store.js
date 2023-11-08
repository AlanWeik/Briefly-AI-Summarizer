import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaulMiddleware) => 
  getDefaulMiddleware().concat(),
});
