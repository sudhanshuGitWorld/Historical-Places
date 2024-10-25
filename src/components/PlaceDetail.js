import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Badge from './Badge';
import { updateVisitStatus } from '../slices/placeSlice';
import { updateRouteStatus } from '../slices/routeStatusSlice';
import {
    HOME,
    HISTORICAL_PLACES,
    LOADING,
    MARK_AS_VISITED,
    MARK_AS_NOT_VISITED,
} from '../constant';

const PlaceDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.places.data);
    const selectedPlace = data?.filter(item => item.id === id);

    const setVisitStatus = (id, isVisited) => {
        dispatch(updateVisitStatus({ id, isVisited, data }));
    };

    const returnToHome = () => {
        navigate('/');
        dispatch(updateRouteStatus({ isReturnToHome: true }))
    }

    return (
      <div>
        <Header title={HISTORICAL_PLACES} />
        <section className="bg-white">
          <div className='flex mx-12 sm:w-10/12 lg:w-11/12 py-4'>
            <button className='text-2xl' onClick={() => returnToHome()}>{HOME}</button>
          </div>
          {selectedPlace?.map(({ name, imageUrl,isVisited, description }) => (
            <div className="gap-16 items-center px-4 mx-9 max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                <div className="grid gap-4 mt-8 h-full">
                  <Badge isVisited={isVisited} />
                  <img
                      className="w-full h-full rounded-lg"
                      src={imageUrl}
                      alt={LOADING}
                  />
                </div>

                <div className="font-light mt-5 h-full text-gray-500 sm:text-lg lg:text-base md:text-sm md:mt-5">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        {name}
                    </h2>
                    <p className="mb-4 text-justify">{description}</p>
                </div>
                <button
                    className='cursor-pointer w-full bg-cyan-500 hover:bg-green-300 hover:text-black rounded text-white h-12 md:w-full'
                    onClick={() => setVisitStatus(id, isVisited)}>
                    {isVisited ? MARK_AS_NOT_VISITED : MARK_AS_VISITED}
                </button>
            </div>
          ))}
        </section>
      </div>
    );
}
 
export default PlaceDetail;