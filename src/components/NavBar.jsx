import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/Logo.jpg";

export default function HomePage() {
    return (
        <div className=" text-white ">
            {/* Header */}
            <header className="flex justify-between items-center container md:contain">
                <Link href={"/"}>
                    <Image src={logo} width={100} height={100} alt='...' />
                </Link>
                <div className="text-right">
                    <p className='text-black'>Call us, we are open 24/7</p>
                    <p className="text-lg text-black">(+49) 1726178512</p>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-tacPrimary py-4 container md:contain border rounded-tr-lg rounded-tl-lg">
                <ul className="flex justify-center gap-2 md:gap-4 items-center">
                    <Link href="/" className="hover:text-gray-300 md:text-base text-xs">HOME</Link>
                    <Link href="/seatrips" className="hover:text-gray-300 md:text-base text-xs">SEA TRIPS</Link>
                    <Link href="/deserttrips" className="hover:text-gray-300 md:text-base text-xs">DESERT TRIPS</Link>
                    <Link href="/citytours" className="hover:text-gray-300 md:text-base text-xs">CITY TOUR</Link>
                    <Link href="/about" className="hover:text-gray-300 md:text-base text-xs">ABOUT US</Link>
                </ul>
            </nav>

            {/* Hero Section */}
            <div className="h-[80vh] bg-img w-full flex  items-center justify-center ">
                <section className=" flex flex-col items-center justify-center ">
                    <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
                        <h2 className="text-4xl font-bold mb-4">Find Your Best Holiday</h2>
                        <p className="text-lg mb-6">Find great adventure holidays and activities around the planet.</p>
                        <div className="relative flex w-full gap-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 rounded-lg text-black w-full"
                            />
                            <button className="bg-tacPrimary rounded-lg text-white px-4">Search</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
