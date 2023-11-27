
'use client';

import { Avatar, Blockquote } from 'flowbite-react';

function Testimonial() {
    return (
        <div className='w-full' style={{ backgroundImage: `url("https://i.ibb.co/n8z017z/hero-area-bg1.jpg")` }}>
            <figure className="mx-auto max-w-screen-md text-center pt-[80px]">
                <svg
                    className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <Blockquote >
                    <p className="text-2xl font-medium italic text-white dark:text-white">
                        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                        complex dashboard. Perfect choice for your next SaaS application."
                    </p>
                </Blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                    <Avatar rounded size="xs" img="data:image/jpeg;base64,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" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <cite className="pr-3 font-medium text-white dark:text-white">Micheal Gough</cite>
                        <cite className="pl-3 text-sm text-white dark:text-gray-400">CEO at Google</cite>
                    </div>
                </figcaption>
            </figure>
            <div className="w-full h-[384px] bg-purple-950 mt-[-280px] bg-opacity-90">

            </div>
        </div>
    );
}
export default Testimonial;