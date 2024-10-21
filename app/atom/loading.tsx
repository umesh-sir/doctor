import React from 'react'
import { RingLoader } from 'react-spinners'
 

const Loading = ({ isLoading }) => {
    return (
        <>
            {isLoading && <div className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full">
                <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
                <RingLoader size={80} color="#101011" />
                </div>
            </div>}
        </>
    )
}

export default Loading

