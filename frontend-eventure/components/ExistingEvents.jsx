'use client';  // Add this directive to make it a Client Component

import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

function ExistingEvents({ data }) {
    const [events, setEvents] = useState(data || []);

    const totalRegistered = events.length;
    const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).length;

    return (
        <div className='h-full w-full'>
            <div className='flex justify-between'>
                <div className='font-semibold text-xl'>
                    Existing Events
                </div>
                <div className='font-mono font-semibold text-sm flex items-center gap-4 px-3 text-gray-600'>
                    <span>Total Registered: {totalRegistered}</span>
                    <span>Upcoming: {upcomingEvents}</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2 w-full h-full'>
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        type={"registered"}
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

export default ExistingEvents;
