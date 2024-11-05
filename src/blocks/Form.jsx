import React, { useEffect } from 'react';
import Button from '../components/Button';

const getRandomDurationAndDelay = () => {
    const duration = Math.random() * (5000 - 3000) + 3000;
    const delay = Math.random() * (1000 - 500) + 500;
    return { duration: duration.toFixed(0), delay: delay.toFixed(0) };
};

const Form = () => {
    useEffect(() => {
        const blobs = document.querySelectorAll('.blob');

        blobs.forEach(blob => {
            const { duration, delay } = getRandomDurationAndDelay();
            blob.style.animation = `pulse ${duration}ms ease-in-out infinite`;
            blob.style.animationDelay = `${delay}ms`;
        });

        return () => {
            blobs.forEach(blob => {
                blob.style.animation = '';
                blob.style.animationDelay = '';
            });
        };
    }, []);

    return (
        <section className="relative py-24 w-full flex items-center justify-center">
            <div className="absolute inset-0 lava-lamp md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob1 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob2 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob3 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob4 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob5 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob6 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob7 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob8 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob9 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>
            <div className="absolute inset-0 blob blob10 md:py-52 py-28 md:bg-cover md:bg-center bg-contain bg-fixed bg-no-repeat"></div>

            <div className="bg-white p-8 rounded-xl shadow-lg w-[800px] transform">
                <h1 className="text-4xl font-bold mb-10 text-center">Have any questions?</h1>
                <form action="#" method="POST" className="space-y-6 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block font-medium text-gray-700 w-full">First Name<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="first-name"
                                name="firstName"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="First name"
                                required />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block font-medium text-gray-700">Last Name<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Last name"
                                required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Email"
                            required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-medium text-gray-700">Message<span className="text-red-500">*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
                            placeholder="Message"
                            rows="4"
                            required>
                        </textarea>
                    </div>
                    <div className="flex items-center text-gray-500 hover:underline hover:text-gray-800 w-max">
                        <input
                            type="checkbox"
                            id="agreement"
                            required
                            className="cursor-pointer"
                        />
                        <label
                            htmlFor="agreement"
                            className="pl-2 cursor-pointer"
                        >
                            I agree to allow my data to be sold to anyone, at any time without any reason
                            <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 gap-4 w-full">
                        <Button
                            type="submit"
                            label="Sign Up"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;
