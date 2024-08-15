import React from 'react'
import EventCard from './EventCard'

import {useUser} from "@auth0/nextjs-auth0/client";


function EventList({data}) {

  const {user,error,isLoading} = useUser();



    return (
        <div className='h-full w-full'>
            <div className='font-semibold text-xl'>Upcoming Events for you {user?.name}!👇 </div>
            <div className='flex flex-col gap-2 p-2 w-full h-full'>
                {
                    data?.map((event) => (
                        <EventCard
                        key={event.id}
                        type={"registered"}
                        eventName={event.eventTitle}
                        eventDesc={event.eventDescription}
                        eventDate={new Date(event.eventDate).toLocaleDateString()}
                        eventLocation={event.eventLocation}
                    />
                    ))
                }
            </div>
        </div>
    )
}

export default EventList