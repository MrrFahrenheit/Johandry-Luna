import React from 'react'

export default function Card({children, classname}: {children?: React.ReactNode, classname?: string}) {
    return (
        <div className='rounded-lg p-3 bg-[#080808] border border-zinc-900'>
            {children}
        </div>
    )
}
