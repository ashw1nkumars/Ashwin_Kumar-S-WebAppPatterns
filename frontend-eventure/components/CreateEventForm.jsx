"use client"
import React from 'react'
import {useUser} from "@auth0/nextjs-auth0/client";


function CreateEventForm() {
  const {user,error,isLoading} = useUser();


    const data = {
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventUser: user?.email || '',
        eventCreatedBy: user?.email || '',
        eventDescription: '',
        eventParticipants: [user?.email]
    }

    const handleChange = (e) => {
        if (e.target.name === 'eventTime') {
            data[e.target.name] = new Date(e.target.value).toISOString()
        }
        else data[e.target.name] = e.target.value
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get the event date and time from the inputs (you may have these inputs already in your form)
        const eventDate = data.eventDate;  // Example: "2024-09-29"
        // const eventTime = data.eventTime;  // Example: "10:00"
    
        // Combine date and time to create a timestamp
        const timestamp = `${eventDate}T00:00:00`;
    
        // Update the data object
        const eventData = {
            ...data,
            eventDate: timestamp,  // Now has the format "2024-09-29T10:00:00"
        };
    
        const jsonData = JSON.stringify(eventData);
        console.log("Payload being sent:", jsonData); // Debugging line
    
        const response = await fetch('http://localhost:8080/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        });
    
        if (!response.ok) {
            console.error('Server responded with:', response.status, response.statusText);
        } else {
            console.log('Event created successfully:', await response.json());
        }
    };
    


    return (
        <div className='h-full w-full border border-2 rounded border-gray-500'>
            <div className='font-semibold text-center py-8 text-2xl'>Enter Event Details</div>
            <div className='flex justify-evenly'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your event name?</span>
                    </div>
                    <input onChange={handleChange} name="eventName" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">When is your event?</span>
                    </div>
                    <input onChange={handleChange} name="eventDate" type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Where is your event?</span>
                    </div>
                    <input onChange={handleChange} name="eventLocation" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>

            </div>
            <div className='flex flex-col justify-center items-center gap-2 p-2 w-full h-full'>
                <div className='flex justify-between w-full px-28'>
                    <div className='w-1/3'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Organizer Name</span>
                            </div>
                            <input onChange={handleChange} name="eventUser" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className='w-2/3'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Describe your event?</span>
                            </div>
                            <textarea onChange={handleChange} name="eventDescription" className="w-full textarea textarea-bordered h-24" placeholder="Type here" />
                        </label>
                    </div>
                </div>
                <button onClick={(e) => handleSubmit(e)} className="btn btn-accent w-1/5">Submit</button>
            </div>
        </div>
    )
}

export default CreateEventForm