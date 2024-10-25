import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Place from "./Place";
import Header from "./Header";
import testData from '../db/db.json'
import { HISTORICAL_PLACES, API_URL, FAILED_TO_FETCH } from '../constant'
import { fetchPlacesData } from '../slices/placeSlice'

const Home = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.data);
  const suggestedPlace = useSelector((state) => state.places.suggestedPlace);
  const { isReturnToHome } = useSelector((state) => state.route.status);

  useEffect(() => {
    if (!isReturnToHome) {
      async function getData() {
        try {
          const data = await fetch(API_URL);
          const response = await data.json();
          dispatch(fetchPlacesData(response));
        } catch (error) {
          // created dummy test data to test application, if api fails to fetch data from server.
          if (error.message === FAILED_TO_FETCH) dispatch(fetchPlacesData(testData));
        }
      }
      getData();
    }
  }, [dispatch, isReturnToHome])

  return (
    <>
      <Header title={HISTORICAL_PLACES} data={places} />
      <Place data={suggestedPlace?.length > 0 ? suggestedPlace : places} />
    </>
  );
};

export default Home;
