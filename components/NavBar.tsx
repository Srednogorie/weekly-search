import Image from "next/image"
import Link from "next/link"
import React from "react"

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-6">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="relative w-40 h-10 cursor-pointer">
                    {/* Link with <a> tag isn't allowed, use legacyBehavior or fix*/}
                    <Link href="/" className="flex items-center" legacyBehavior>
                        <a>
                            <Image src="/JsSearch.png" className="mr-3 h-6 sm:h-9" alt="JsSearch Logo" layout="fill"/>
                        </a>
                    </Link>
                </div>
                <div className="flex mt-4">
                    <Link href="/bookmarks" legacyBehavior>
                        <a className={"cursor-pointer has-tooltip"}>
                            <span className='tooltip rounded shadow-lg p-1 bg-[#264653] text-white mt-8 opacity-70 text-xs'>Bookmarks</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#264653">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
                            </svg>
                        </a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className={"cursor-pointer has-tooltip ml-5"}>
                            <span className='tooltip rounded shadow-lg p-1 bg-[#264653] text-white mt-8 opacity-70 text-xs'>About</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#264653" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
