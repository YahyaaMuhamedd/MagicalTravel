import WhatappIcon from '@/assets/WhatappIcon';
import Link from 'next/link';
import React from 'react'

function WhatappFloatingBtn() {
    return (
        <Link
            href="https://wa.me/+491726178512"
            target="_blank"
            rel="noreferrer"
        >
            <div className="fixed bottom-0 right-0 p-2 m-3 md:m-10  bg-white rounded-full shadow-lg z-50">
                <WhatappIcon />
            </div>
        </Link>
    );
}

export default WhatappFloatingBtn