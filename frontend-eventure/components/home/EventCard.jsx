import React from 'react'

function EventCard({ type = "event", eventName = "Test Event", eventDesc= "Test Event description", eventDate= "19 AUG 2024", eventLocation= "Paris" }) {
  

    const actionButtonText = type === "user-event" ? "Edit" : type === "registered"? "Registered" : "Register"

    return (
    <div className='flex bg-gray-300 text-black w-full max-h-28 min-h-28 transition-all hover:scale-105 rounded p-4'>
        <div className='flex w-2/3 flex-col gap-1'>
            <div className='font-extrabold underline decoration-black'>{eventName}</div>
            <div className='text-md'>{eventDesc}</div>
            
        </div>
        <div className='w-1/3 flex flex-col gap-2'>
        <div className='flex gap-5 justify-end'>
                <div className='text-sm font-mono'>{eventDate}</div>
                <div className='text-sm font-mono'>{eventLocation}</div>
            </div>
            <div className='flex w-full gap-4 justify-end'>
                <button className='bg-black text-white w-28 rounded p-1'>{actionButtonText}</button>
            </div>

        </div>
        
    </div>
  )
}

export default EventCard