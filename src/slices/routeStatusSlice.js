import { createSlice } from '@reduxjs/toolkit'

export const routeStatusSlice = createSlice({
  name: 'routeStatusSlice',
  initialState: { status: {} },
  reducers: {
    updateRouteStatus: (state, { payload }) => {
      state.status = payload;
    }
  },
})

export const { updateRouteStatus } = routeStatusSlice.actions
export default routeStatusSlice.reducer
