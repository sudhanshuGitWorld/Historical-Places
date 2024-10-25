import React from 'react';
import { PAGE_NOT_FOUND_URL, PAGE_NOT_FOUND } from '../constant';

const PageNotFound = () => {
    return (
        <div class="mt-20 flex justify-center">
            <img src={PAGE_NOT_FOUND_URL} alt={PAGE_NOT_FOUND} />
        </div>
      
    );
}
 
export default PageNotFound;