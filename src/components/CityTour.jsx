'use client'
import React, { useState } from 'react';
import TripCard from '@/components/TripCard';
import Hurghada from '@/assets/Hurghada3.webp';
import ElGouna from '@/assets/ElGouna2.jpg';


const allTrips = [
    { title: 'Hurghada City Tour', imageUrl: Hurghada, category: 'Uncategorized', one: "• Duration 3 Hours", two: "• Small group", three: "• Going and returning", four: "• Visiting the largest mosque", five: "• The largest church", six: "• Old City", seven: "• Shisha + 5 EUR Extra (a type of hookah or waterpipe)" },
    { title: 'Program of Private Tour in El Gouna', imageUrl: ElGouna, category: 'Uncategorized', one: "• Duration 3 Hours", two: "• Lagoon trip", three: "• El Gouna Tower", four: "• El Gouna Downtown", five: "• Abu Tig Marina (El Gouna)" },
];

function CityTour() {
    const [visibleTrips, setVisibleTrips] = useState(3);

    const handleViewAll = () => {
        setVisibleTrips(allTrips.length);
    };

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-6 pb-5 border-b-4 border-tacPrimary w-fit m-auto">CITY TOURS</h2>

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

export default CityTour;
