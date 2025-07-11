import React from 'react'

export default function Loader() {
    return (
        <>
            <div className="flex justify-center items-center h-screen dark:bg-dark">
                <div className="w-12 h-12 border-4 border-gray-300 dark:border-t-zinc-800 dark:border-gray-300 border-t-zinc-800 rounded-full animate-spin"></div>
            </div>
        </>
    )
}
