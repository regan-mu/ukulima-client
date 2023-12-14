"use client";

import { useState } from "react";
import axios from "axios";

export default function NewActivity({revalidate}) {
    const [activity, setActivity] = useState("");
    const handleInputs = (e) => {
        const {value} = e.target;
        setActivity(value);
    }

    const createActivity = async (e) => {
        e.preventDefault();
        const data = {title: activity}
        const response = await axios.post('https://ukulima.onrender.com/API/activities/create', data);
        revalidate();
        setActivity("");
        return response;
    }

    return (
        <div className="shadow-lg p-5 rounded-lg border border-gray-300">
            <h3 className="font-ephesis font-semibold mb-2 text-center">Add Activity</h3>
            <form className="flex flex-col gap-2 pb-5" onSubmit={createActivity}>
                <div className="flex flex-col gap-1 w-full h-auto">
                    <label htmlFor="activity" className="text-gray-600 font-light">Activity Name</label>
                    <input onChange={handleInputs} value={activity} required className="h-8 w-full border resize-none border-teal-500 p-3 rounded-lg" name="activity" type="text" id="activity" />
                </div>
                <div className="mt-1">
                    <button className="px-4 py-2 bg-teal-600 text-white font-ephesis rounded-3xl text-xs" type="submit">New Activity</button>
                </div>
            </form>
        </div>
    )
}