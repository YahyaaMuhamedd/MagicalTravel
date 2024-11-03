import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function TripCard({ title, imageUrl, category, one, two, three, four, five, six, seven }) {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image src={imageUrl} alt={title} className="object-cover w-full h-full" />
                {/* Category Badge */}
                <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            {/* Details */}
            <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{title}</h3>
                <div className="flex flex-col " dir='ltr'>
                    <p className="text-gray-500 text-left"> {one}</p>
                    <p className="text-gray-500 text-left"> {two}</p>
                    <p className="text-gray-500 text-left"> {three}</p>
                    <p className="text-gray-500 text-left"> {four}</p>
                    <p className="text-gray-500 text-left"> {five}</p>
                    <p className="text-gray-500 text-left"> {six}</p>
                    <p className="text-gray-500 text-left">{seven}</p>
                </div>
            </div>

            {/* Book Now Button */}
            <div className="p-4 border-t text-center">
                <Link className="flex items-center justify-center w-full text-blue-700 font-semibold hover:underline" href="https://wa.me/+491726178512"
                    target="_blank"
                    rel="noreferrer">
                    <span className="mr-1">📅</span> Book Now
                </Link>
            </div>
        </div>
    );
}

export default TripCard;
