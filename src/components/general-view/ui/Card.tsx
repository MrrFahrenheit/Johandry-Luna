import React from 'react'

export default function Card({children}: {children?: React.ReactNode}) {
    return (
        <div className='rounded-lg p-3 bg-[#080808] border border-zinc-900'>
            {children}
        </div>
    )
}
