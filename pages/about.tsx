import {NextPage} from "next"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from 'next/image'

const About: NextPage = () => {
    return (
        <div className="flex flex-col !h-screen justify-between">
            <NavBar/>
            <div className="flex flex-col items-center mb-auto mx-4">
                <p className="italic text-[#F4A261] text-center my-6">
                    <div className={"flex items-center"}>
                        <Image src="/octocat.jpg" alt="Picture of the author" width={30} height={30}/>
                        <a href="https://github.com/Srednogorie/weekly-search" target="_blank" rel="noreferrer" className={"underline text-[#E76F51] ml-2"}>
                            github.com/Srednogorie/weekly-search
                        </a>
                    </div>
                </p>
                <h1 className="text-[#264653] text-2xl py-3">Frontend</h1>
                <p className="italic text-[#F4A261] text-center">React, NextJs, Tailwind, SWR, Formic, Algolia&apos;s react-instantsearch-hooks</p>
                <p className="italic text-[#F4A261] text-center">Color scheme - <a href="https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51" target={"_blank"} rel={"noreferrer"} className={"underline text-[#E76F51]"}>coolors.co</a></p>
                <p className="italic text-[#F4A261] text-center">Icons - <a href="https://heroicons.com/" target={"_blank"} rel={"noreferrer"} className={"underline text-[#E76F51]"}>heroicons.com</a></p>
                <h1 className="text-[#264653] text-2xl py-3">Backend</h1>
                <p className="italic text-[#F4A261] text-center">Python, Scrapy, Firebase, Algolia</p>
                <h1 className="text-[#264653] text-2xl py-3">Data</h1>
                <p className="italic text-[#F4A261] text-center">
                    <a href="https://javascriptweekly.com/" target="_blank" rel="noreferrer" className={"underline text-[#E76F51]"}>
                        javascriptweekly.com
                    </a>
                </p>
                <p className="italic text-[#F4A261] text-center">
                    <a href="https://react.statuscode.com/" target="_blank" rel="noreferrer" className={"underline text-[#E76F51]"}>
                        react.statuscode.com
                    </a>
                </p>
                <p className="italic text-[#F4A261] text-center">
                    <a href="https://nodeweekly.com/" target="_blank" rel="noreferrer" className={"underline text-[#E76F51]"}>
                        nodeweekly.com
                    </a>
                </p>
                <h1 className="text-[#264653] text-2xl py-3">Deployment</h1>
                <p className="italic text-[#F4A261] text-center">GCP for cron jobs & cloud functions, Vercel for hosting</p>
            </div>
            <Footer/>
        </div>
    )
}

export default About;
