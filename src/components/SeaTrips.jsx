'use client'
import React, { useState } from 'react';
import TripCard from './TripCard';
import Orangebay from '@/assets/orangebay.jpg';
import ParadiseIsland from '@/assets/paradiseisland.jpg';
import MahmayaIsland from '@/assets/mahmayaisland.jpg';
import Diving from '@/assets/Diving.jpeg';
import AbuDababa from '@/assets/AbuDababa.jpg';
import dolphinWorld from '@/assets/dolphin world.jpg';


const allTrips = [
    { title: 'Orange Bay', imageUrl: Orangebay, category: 'Uncategorized', one: "• Duration 7 - 8 Hours", two: "• snorkelling + equipments", three: "• Soft & hot drinks, and buffet lunch on boat", four: "• pick up & drop off to your hotel", },
    { title: 'Paradise', imageUrl: ParadiseIsland, category: 'Uncategorized', one: "• Duration 7 - 8 Hours", two: "• snorkelling + equipments", three: "• Soft & hot drinks, and buffet lunch on boat", four: "• pick up & drop off to your hotel", },
    { title: 'Giftun', imageUrl: MahmayaIsland, category: 'Uncategorized', one: "• Duration 7 - 8 Hours", two: "• snorkelling + equipments", three: "• Soft & hot drinks, and buffet lunch on boat", four: "• pick up & drop off to your hotel", },
    { title: 'Diving', imageUrl: Diving, category: 'Adventure', one: "• Duration: 15 Min / 1 dive", two: "• snorkelling + equipments", three: "• Soft drinks + Lunch on boat", },
    { title: 'Abu Dabbab', imageUrl: AbuDababa, category: 'Snorkeling', one: "• Transfers in air-conditioned vehicles", two: "• Lunch", three: "• Soft & hot drinks, ", four: "• Entrance fees for all attractions mentioned in the description", },
    { title: 'Dolphin World', imageUrl: dolphinWorld, category: 'Relaxation', one: "• duration 1.5 - 2 hours", two: "• entry", three: "• not included swimming with dolphin ... Private price for swimming with dolphin", four: "• available video and pictures", },
];

function SeaTrips() {
    const [visibleTrips, setVisibleTrips] = useState(3);

    const handleViewAll = () => {
        setVisibleTrips(allTrips.length);
    };

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-6 pb-5 border-b-4 border-tacPrimary w-fit m-auto">SEA TRIPS</h2>

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

export default SeaTrips;
