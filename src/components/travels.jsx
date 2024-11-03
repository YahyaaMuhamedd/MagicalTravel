'use client'
import React, { useState } from 'react';
import TripCard from './TripCard';
import Cairo from '@/assets/Cairo.png';
import Luxor from '@/assets/Luxor (1).jpeg';



const allTrips = [
    { title: 'Cairo', imageUrl: Cairo, category: 'Uncategorized', one: "• duration 1 day", two: "• transportation in an air-conditioned vehicle", three: "• with entry and pickup and drop-off in Cairo/Giza", four: "• water on board", },
    { title: 'Luxor', imageUrl: Luxor, category: 'Uncategorized', one: "• duration 1 day", two: "• transportation in an air-conditioned vehicle", three: "• with entry ", four: "• water on board", },
];


function Travels() {
    const [visibleTrips, setVisibleTrips] = useState(3);

    const handleViewAll = () => {
        setVisibleTrips(allTrips.length);
    };

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-6 pb-5 border-b-4 border-tacPrimary w-fit m-auto">TRAVELS</h2>

            <div className="max-w-6xl  grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {allTrips.slice(0, visibleTrips).map((trip) => (
                    <TripCard key={trip.title} {...trip} />
                ))}
            </div>

            {/* View All Posts Button */}
            {visibleTrips < allTrips.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleViewAll}
                        className="px-6 py-2 text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
                    >
                        VIEW ALL POSTS
                    </button>
                </div>
            )}
        </div>
    );
}

export default Travels;
