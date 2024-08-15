import React from 'react'
import EventCard from './EventCard'

function EventsBoard() {
    return (
        <div className='h-full w-full'>
            <div className='font-semibold text-xl'>Active Events</div>
            <div className='flex flex-col gap-2 p-2 w-full h-full'>
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

export default EventsBoard