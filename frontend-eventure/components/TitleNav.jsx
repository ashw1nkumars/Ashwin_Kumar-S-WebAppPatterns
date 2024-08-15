import React from 'react'
import Link from 'next/link'
import LoginButton from './LoginButton'

function TitleNav() {
  return (
    <div className='flex  p-10 items-center justify-between w-full'>
      <div className='font-extrabold text-6xl'>
                <Link href={'/'}>
            Eventure
                </Link>
        </div>
        <div className='mt-5 flex gap-5 items-center justify-center'>
            <Link href='/'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Home</span>
            </Link>
            <Link href='/dashboard'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Dashboard</span>
            </Link>
            <Link href='/createevent'>
                    <span className='hover:underline decoration-4 decoration-amber-500'>Create Event</span>
            </Link>
            <LoginButton />
        </div>
    </div>
  )
}
//dev-8l6k01t1oamf3146
export default TitleNav