'use client'
import React, { useState } from 'react';
import TripCard from '@/components/TripCard';
import DesertSafari from '@/assets/Desert Safari.jpg';
import DesertSafari2 from '@/assets/safari (1).jpeg';


const allTrips = [
    { title: 'Desert Safari (Quad 3H)', imageUrl: DesertSafari, category: 'Uncategorized', one: "• Duration 3 Hours", two: "• experience an exciting, ATV Quad", three: "• visit a Bedouin village in the desert", four: "• Camels ride", },
    { title: 'Desert Safari SunSet', imageUrl: DesertSafari2, category: 'Uncategorized', one: "• Duration 3 Hours", two: "• experience an exciting, ATV Quad", three: "• visit a Bedouin village in the desert", four: "• Camels ride", five: "• Dinner + Party" },
];

function DesertTrip() {
    const [visibleTrips, setVisibleTrips] = useState(3);

    const handleViewAll = () => {
        setVisibleTrips(allTrips.length);
    };

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-6 pb-5 border-b-4 border-tacPrimary w-fit m-auto">DESERT TRIPS</h2>

            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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

export default DesertTrip;
