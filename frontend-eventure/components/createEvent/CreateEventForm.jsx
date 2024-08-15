import React from 'react'

function CreateEventForm() {
    return (
        <div className='h-full w-full'>
            <div className='font-semibold text-center py-3 text-xl'>Enter Event Details</div>
            <div className='flex flex-col justify-center items-center gap-2 p-2 w-full h-full'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your event name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">When is your event?</span>
                    </div>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Where is your event?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Describe your event?</span>
                    </div>
                    <textarea className="w-full max-w-xs textarea textarea-bordered h-24" placeholder="Type here" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Organizer Name</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your Max Head limit?</span>
                    </div>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <button className="btn btn-accent w-1/5">Submit</button>
            </div>
        </div>
    )
}

export default CreateEventForm