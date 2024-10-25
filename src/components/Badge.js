import React from 'react';
import { badge, dynamicColorClass } from '../constant';

const Badge = ({ isVisited }) => {
    const { visited, notVisited } = badge;
    const { bgPink, bgYellow, textSlate, textYellow } = dynamicColorClass;
    const colorClass =  isVisited ? `${bgYellow} ${textYellow}` : `${bgPink} ${textSlate}`;

    return (
        <>
            <span className={`${colorClass} text-xs font-medium me-2 px-2.5 py-0.5 rounded absolute`}>
                {isVisited ? visited : notVisited}
            </span>
        </>
    );
}
 
export default Badge;