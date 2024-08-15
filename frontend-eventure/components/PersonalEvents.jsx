'use client';  // Add this directive at the top

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

function PersonalEvents({ data }) {
    const [events, setEvents] = useState(data || []);


    return (
        <div className='h-full w-full'>
            <div className='flex justify-between'>
                <div className='font-semibold text-xl'>
                    My Events
                </div>
                <div className='font-mono font-semibold text-sm flex items-center gap-4 px-3 text-gray-600'>
                    <span>People Registered: {events.reduce((acc, event) => acc + event?.registeredCount, 0)}</span>
                    <span>Upcoming: {events.filter(event => new Date(event?.date) > new Date()).length}</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2 w-full h-full'>
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        type={"user-event"}
                        eventName={event.eventTitle}
                        eventDesc={event.eventDescription}
                        eventDate={new Date(event.eventDate).toLocaleDateString()}
                        eventLocation={event.eventLocation}
                    />
                ))}
            </div>
        </div>
    );
}

export default PersonalEvents;
