import React from "react"
import Image from "next/image"
import Link from "next/link"

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-6">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="relative w-40 h-10 cursor-pointer">
                    <Link href="/" className="flex items-center">
                        <a>
                            <Image src="/JsSearch.png" className="mr-3 h-6 sm:h-9" alt="JsSearch Logo" layout="fill"/>
                        </a>
                    </Link>
                </div>
                <div id="navbar-default">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium cursor-pointer">
                        <li>
                            <Link href="/about" className="block py-2 pr-4 pl-3 text-[#264653]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
