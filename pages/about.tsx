import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Head>
                <title>About ThaiKit | Practical Thailand Resource Hub</title>
                <meta name="description" content="ThaiKit is a curated directory and resource hub for expats, digital nomads, entrepreneurs, and students in Thailand. Find reliable information about visas, banking, housing, and more." />
                <link rel="canonical" href="https://thaikit.net/about" />
            </Head>

            <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* 页面标题 */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ThaiKit</h1>
                        <p className="text-xl text-gray-600">Your Practical Guide to Living, Working, and Starting a Business in Thailand</p>
                    </div>

                    {/* 网站简介 */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Welcome to ThaiKit</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            ThaiKit is a curated directory and resource hub designed specifically for expats, digital nomads, entrepreneurs, and students who are navigating life in Thailand. Whether you're applying for a visa, setting up a local bank account, finding an apartment, launching a business, or simply looking for the best mobile plan — we've got you covered.
                        </p>
                    </div>

                    {/* 服务内容 */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Provide</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Reliable information from trusted sources</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Links to official websites and practical platforms</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Local tips written with foreigners in mind</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Multi-language support for English, Chinese, Japanese, and Thai</span>
                            </li>
                        </ul>
                    </div>

                    {/* 联系方式 */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
                        <p className="text-gray-700 mb-6">Have questions or suggestions? We'd love to hear from you!</p>
                        
                        {/* 基本联系方式 */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:contact@thaikit.net" className="text-blue-600 hover:text-blue-800">contact@thaikit.net</a>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <a href="https://thaikit.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.thaikit.net</a>
                            </div>
                        </div>

                        {/* 社交媒体二维码 */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us on Social Media</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <Image
                                        src="https://i.imgur.com/LGryo9e.jpeg"
                                        alt="WeChat QR Code"
                                        width={150}
                                        height={150}
                                        className="mx-auto mb-2"
                                    />
                                    <p className="text-gray-600">WeChat</p>
                                </div>
                                <div className="text-center">
                                    <Image
                                        src="https://i.imgur.com/7gH4lJg.jpeg"
                                        alt="Instagram QR Code"
                                        width={150}
                                        height={150}
                                        className="mx-auto mb-2"
                                    />
                                    <p className="text-gray-600">Instagram</p>
                                </div>
                                <div className="text-center">
                                    <Image
                                        src="https://i.imgur.com/QYh03By.jpeg"
                                        alt="Line QR Code"
                                        width={150}
                                        height={150}
                                        className="mx-auto mb-2"
                                    />
                                    <p className="text-gray-600">Line</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
} 