import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        About Us
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to our OSINT platform, your go-to resource for passive reconnaissance. Our mission is to empower users with the tools and data needed to gather valuable information about their targets efficiently and ethically. Whether you're a cybersecurity professional, investigator, or simply curious, our platform is designed to provide you with comprehensive insights while respecting privacy and legal boundaries. Join us as we navigate the vast world of open-source intelligence with precision and integrity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}