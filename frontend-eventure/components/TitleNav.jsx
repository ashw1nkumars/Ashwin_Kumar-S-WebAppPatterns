import React from 'react'
import Link from 'next/link'

function TitleNav() {
  return (
    <div className='flex pt-10 flex-col items-center justify-center w-full'>
        <div className='font-extrabold text-6xl'>
                <Link href={'/'}>
            Eventure
                </Link>
        </div>
        <div className='text-xl py-2'>
            A unified event management platform
        </div>
        <div className='mt-5 w-2/3 flex gap-5 items-center justify-center'>
            <Link href='/'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Home</span>
            </Link>
            <Link href='/dashboard'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Dashboard</span>
            </Link>
            <Link href='/createevent'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Create Event</span>
            </Link>
            <Link href='/signin'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Login</span>
            </Link>
        </div>
    </div>
  )
}

export default TitleNav