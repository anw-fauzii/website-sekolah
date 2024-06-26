import React, { useState } from 'react';

export default function Navbar() {
    // State untuk mengontrol apakah dropdown ditampilkan atau tidak
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-yellow-400 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-lg shadow-lime-950">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://sip.primainsanigarut.sch.id/storage/logo.png" className="h-8" alt="Flowbite Logo" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">PPDB</button>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Mengubah state isDropdownOpen saat tombol ditekan
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-expanded={isDropdownOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li className="relative">
                            {/* Menambahkan kelas 'group' */}
                            <a
                                href="#"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Mengubah state isDropdownOpen saat item Services ditekan
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group"
                            >
                                Services
                            </a>
                            {/* Menampilkan dropdown berdasarkan state isDropdownOpen */}
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 2</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 3</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

