import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showRandomSuggestion } from '../slices/placeSlice'
import { USER_IMAGE, USER_IMAGE_URL, RECOMMENDED } from '../constant';

const Header = ({ title, data }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.places.data);

    const randomSuggestion = (path) => {
      if (path === 'home') {
        const randomSuggestionData = [];
        dispatch(showRandomSuggestion({ randomSuggestionData }));
      } else {
        const suggestionId = Math.floor(Math.random() * data?.length+1);
        const randomSuggestionData = store?.filter(item => item.id === suggestionId.toString());
        dispatch(showRandomSuggestion({ randomSuggestionData }));
      }
    }

    return (
      <>
        <header>
          <nav className='flex bg-blue-400 border-gray-200 px-4 lg:px-6 py-2.5'>
            <div className='flex flex-wrap justify-between items-center cursor-pointer ml-0 w-5/12 lg:w-[14%] md:w-1/5' onClick={() => randomSuggestion('home')}>
              <span className='self-center text-xl text-white font-semibold whitespace-nowrap'>
                {title}
              </span>
            </div>
            <div className='flex items-center justify-end lg:w-[86%] md:w-[86%] w-[86%]'>
              <div>
                <button
                  onClick={() => randomSuggestion()}
                  className='text-white px-3 py-2 text-xs border border-gray-300 focus:outline-none hover:bg-gray-800 font-medium rounded-lg lg:text-sm lg:px-5 lg:py-2.5 me-2'>
                  {RECOMMENDED}
                </button>
              </div>
              <div className='border-gray-600 rounded-full bg-slate-200 h-8 w-8 lg:h-11 lg:w-11 text-center'>
                <img
                  src={USER_IMAGE_URL}
                  alt={USER_IMAGE}
                  className='rounded-full w-10'/>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}
 
export default Header;