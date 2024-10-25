import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Badge from './Badge';
import Shimmer from "./Shimmer";
import { updateVisitStatus } from '../slices/placeSlice';
import { updateRouteStatus } from '../slices/routeStatusSlice';
import {
  MARK_AS_VISITED,
  VIEW_DETAILS,
  LOADING,
  MARK_AS_NOT_VISITED,
  dynamicColorClass,
} from '../constant';

const Place = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isDataFetched = Array.isArray(data) && data?.length > 0;
    const { imgLoadedClass, imgNotLoadedClass } = dynamicColorClass;

    const setVisitStatus = (id, isVisited) => {
        dispatch(updateVisitStatus({ id, isVisited, data }));
    };

    const viewDetails = (id) => {
      navigate(`place/${id}`);
      dispatch(updateRouteStatus({ isReturnToHome: false }));
    }

    return (
      <>
        {isDataFetched ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:m-4 md:m-3 lg:grid-cols-3 lg:gap-3 md:gap-3 justify-items-center">
            {data?.map(({ id, name, imageUrl, isVisited, about }) => (
              <div key={id} className="py-10">
                <div className="rounded overflow-hidden shadow-lg w-5/6 lg:w-[96%] md:w-full m-auto">
                  <Badge isVisited={isVisited} />
                  <img
                    src={imageUrl}
                    alt={LOADING}
                    className={imageUrl ? imgLoadedClass : imgNotLoadedClass}
                  />
                  <div className="h-52">
                    <div className="py-4 px-6 h-36">
                      <div className="font-bold text-xl mb-2">{name}</div>
                      <p className="text-gray-600">{about?.slice(0, 100)}{'...'}</p>
                    </div>
                    <div className="grid grid-flow-col gap-5 pb-2 px-6 h-12">
                      <button
                        onClick={() => setVisitStatus(id, isVisited)}
                        className='bg-cyan-500 hover:bg-green-300 hover:text-black rounded text-white'>
                        {isVisited ? MARK_AS_NOT_VISITED : MARK_AS_VISITED}
                      </button>
                      <button
                        onClick={() => viewDetails(id)}
                        className='bg-cyan-500 item hover:bg-green-300 hover:text-black rounded text-white'>
                        {VIEW_DETAILS}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Shimmer />
        )}
      </>
    );
}
 
export default Place;
