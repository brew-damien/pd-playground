import React from "react";

const ServiceGrid = () => {
    return (
        <section className="bg-gray-900">
            <div className="container mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="border border-white flex flex-col w-full bg-black text-white rounded-lg px-10 py-12 service_grid group">
                        <div className="">
                            <svg
                                className="stroke-white w-[96px] h-[96px] grid_icon transition-transform duration-200 ease-in-out lg:group-hover:w-[48px] lg:group-hover:h-[48px] lg:group-focus-within:w-[48px] lg:group-focus-within:h-[48px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Analytics Service Icon"
                            >
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 12L12 16L16 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 8V16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h5 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
                                Analytics Service
                            </h5>
                        </div>
                        <div>
                            <p className="leading-snug font-normal text-[15px] lg:group-hover:mb-4 lg:group-focus-within:mb-4 transition-all duration-200 motion-reduce:transition-none gap-b-2">
                                Gain insights from your data with our analytics tools.
                            </p>
                            <div className="mt-6 justify-center w-full lg:opacity-0 h-max lg:max-h-0 lg:group-hover:max-h-[50px] lg:group-hover:opacity-100 lg:group-focus-within:max-h-[50px] lg:group-focus-within:opacity-100 transition-all duration-200 ease-in-out lg:services_button motion-reduce:transition-none motion-reduce:hover:transform-none">
                                <button
                                    className="h-[3rem] xl:h-[3rem] w-full justify-center bg-blue-500 text-white rounded-lg mb-[100px]"
                                    aria-label={`Learn more about Analytics Service`}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-white flex flex-col w-full bg-black text-white rounded-lg px-10 py-12 service_grid group">
                        <div>
                            <svg
                                className="stroke-white w-[96px] h-[96px] grid_icon transition-transform duration-200 ease-in-out lg:group-hover:w-[48px] lg:group-hover:h-[48px] lg:group-focus-within:w-[48px] lg:group-focus-within:h-[48px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Icon for Cloud Storage"
                                role="img"
                            >
                                <path
                                    d="M19 17H6C4.9 17 4 16.1 4 15V11C4 9.9 4.9 9 6 9H8L9.29 7.71C9.68 7.32 10.19 7 10.71 7H13.29C13.81 7 14.32 7.32 14.71 7.71L16 9H18C19.1 9 20 9.9 20 11V15C20 16.1 19.1 17 18 17Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 12C15 13.1046 14.1046 14 13 14C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10C14.1046 10 15 10.8954 15 12Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h5 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
                                Cloud Storage
                            </h5>
                        </div>
                        <div>
                            <p className="leading-snug font-normal text-[15px] lg:group-hover:mb-4 lg:group-focus-within:mb-4 transition-all duration-200 motion-reduce:transition-none gap-b-2">
                                Securely store and access your data in the cloud.
                            </p>
                            <div className="mt-6 justify-center w-full lg:opacity-0 h-max lg:max-h-0 lg:group-hover:max-h-[50px] lg:group-hover:opacity-100 lg:group-focus-within:max-h-[50px] lg:group-focus-within:opacity-100 transition-all duration-200 ease-in-out lg:services_button motion-reduce:transition-none motion-reduce:hover:transform-none">
                                <button className="h-[3rem] xl:h-[3rem] w-full justify-center bg-blue-500 text-white rounded-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-white flex flex-col w-full bg-black text-white rounded-lg px-10 py-12 service_grid group">
                        <div>
                            <svg
                                className="stroke-white w-[96px] h-[96px] grid_icon transition-transform duration-200 ease-in-out lg:group-hover:w-[48px] lg:group-hover:h-[48px] lg:group-focus-within:w-[48px] lg:group-focus-within:h-[48px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Icon for Web Development"
                                role="img"
                            >
                                <path
                                    d="M4 4H20V20H4V4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 12L12 16L16 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 8V16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h5 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
                                Web Development
                            </h5>
                        </div>
                        <div>
                            <p className="leading-snug font-normal text-[15px] lg:group-hover:mb-4 lg:group-focus-within:mb-4 transition-all duration-200 motion-reduce:transition-none gap-b-2">
                                Build modern web apps.
                            </p>
                            <div className="mt-6 justify-center w-full lg:opacity-0 h-max lg:max-h-0 lg:group-hover:max-h-[50px] lg:group-hover:opacity-100 lg:group-focus-within:max-h-[50px] lg:group-focus-within:opacity-100 transition-all duration-200 ease-in-out lg:services_button motion-reduce:transition-none motion-reduce:hover:transform-none">
                                <button className="h-[3rem] xl:h-[3rem] w-full justify-center bg-blue-500 text-white rounded-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
