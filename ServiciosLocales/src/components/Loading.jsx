import React from 'react'

function Loading() {
    return (
        <div>
            <div className="flex items-center justify-center w-scree h-screen border bg-gray-800 border-gray-700">
                <div className="px-4 py-2 text-2xl font-medium leading-none text-center rounded-full animate-pulse bg-blue-900 text-blue-200">loading...</div>
            </div>
        </div>
    )
}

export default Loading