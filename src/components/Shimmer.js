import React from 'react';

const Shimmer = () => {
    const shimmerElemCount = [1, 2, 3];

    return (
        <>
         <div className='grid lg:grid-cols-3 lg:gap-3 md:gap-3 gap-3 mt-10 py-10 grid-cols-1 md:grid-cols-2 lg:m-4'>
            {shimmerElemCount.map((count) => (
                <div key={count} class="mx-auto w-full max-w-sm rounded-md border p-4 shadow">
                    <div class="h-52 w-full rounded bg-slate-200 animate-pulse"></div>
                    <div class="flex animate-pulse space-x-4 pt-10">
                        <div class="flex-1 space-y-6 py-1">
                            <div class="space-y-3">
                                <div class="h-2 rounded bg-slate-200"></div>
                                <div class="h-2 rounded bg-slate-200"></div>
                                <div class="h-2 rounded bg-slate-200"></div>
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="col-span-2 h-12 rounded bg-slate-200"></div>
                                    <div class="col-span-2 h-12 rounded bg-slate-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
      </div>
        </>
    );
}
 
export default Shimmer;