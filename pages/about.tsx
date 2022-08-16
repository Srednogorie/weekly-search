import {NextPage} from "next"
import NavBar from "../components/NavBar"
import {Fragment} from "react"

const About: NextPage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="flex flex-col items-center">
                <h1 className="text-[#264653] text-2xl py-3 mt-3">Frontend</h1>
                <p className="italic text-[#F4A261]">React, NextJs, Tailwind, SWR, Formic, Algolia&apos;s react-instantsearch-hooks</p>
                <p className="italic text-[#F4A261]">Color scheme - https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51</p>
                <h1 className="text-[#264653] text-2xl py-3">Backend</h1>
                <p className="italic text-[#F4A261]">Python, Scrapy, Firebase, Algolia</p>
                <h1 className="text-[#264653] text-2xl py-3">Data</h1>
                <p className="italic text-[#F4A261]">https://javascriptweekly.com/</p>
                <p className="italic text-[#F4A261]">https://react.statuscode.com/</p>
                <p className="italic text-[#F4A261]">https://nodeweekly.com/</p>
                <h1 className="text-[#264653] text-2xl py-3">Deployment</h1>
                <p className="italic text-[#F4A261]">GCP for cron jobs & cloud functions, Vercel for hosting</p>
                <p className="italic text-[#F4A261]">https://github.com/Srednogorie/weekly-search</p>
                <p className="italic text-[#F4A261]">https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51</p>
            </div>
        </Fragment>
    )
}

export default About;
