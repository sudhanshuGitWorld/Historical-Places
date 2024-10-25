import { createSlice } from '@reduxjs/toolkit'

export const placeSlice = createSlice({
  name: 'placesData',
  initialState: {
    data: [],
    suggestedPlace: [],
    isRecommendedShow: true
  },
  reducers: {
    fetchPlacesData: (state, action) => {
      state.data = action.payload;
    },
    updateVisitStatus: (state, { payload }) => {
      const { id, isVisited, data } = payload;
      const updatedData = data?.map(item => {
        if (item.id === id) {
          return { ...item, isVisited: !isVisited };
        }
        return item;
      });

      state.data = updatedData;
    },
    showRandomSuggestion: (state, { payload }) => {
      const { randomSuggestionData, isRecommendedShow } = payload
      state.suggestedPlace = randomSuggestionData;
      state.isRecommendedShow = isRecommendedShow;
    }
  },
})

export const {
  fetchPlacesData, updateVisitStatus, showRandomSuggestion,
} = placeSlice.actions
export default placeSlice.reducer
