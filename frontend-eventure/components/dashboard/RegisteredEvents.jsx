import React from 'react'
import EventCard from '../home/EventCard'

function RegisteredEvents() {
    return (
        <div className='h-full w-full'>
            <div className='flex justify-between'>
                <div className='font-semibold text-xl'>
                    Registered Events
                </div>
                <div className='font-mono font-semibold text-sm flex items-center gap-4 px-3 text-gray-600'>
                    <span>Total Registered: 100</span>
                    <span>Upcoming: 3</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2 w-full h-full'>
                <EventCard type={"registered"}/>
                <EventCard type={"registered"}/>
            </div>
        </div>
    )
}

export default RegisteredEvents