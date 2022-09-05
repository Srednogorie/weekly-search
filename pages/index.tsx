import type { NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite'
import {InstantSearch, SearchBox, Hits, Configure, SearchBoxProps} from 'react-instantsearch-hooks-web'
import Hit from "../components/Hit"
import CustomRefinementList from "../components/CustomRefinementList"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APPID!, process.env.NEXT_PUBLIC_ALGOLIA_APIKEY!)

let timerId: number | NodeJS.Timeout
const queryHook: SearchBoxProps['queryHook'] = (query, search) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => search(query), 1000)
};

const Home: NextPage = () => {
    return (
        <div className={"flex flex-col h-screen"}>
            <NavBar/>
            <div className="flex flex-col items-center justify-start flex-grow">
              <InstantSearch searchClient={searchClient} indexName="JsWeeklyArticles">
                  <SearchBox
                      classNames={
                          {
                              input: "bg-transparent rounded-full py-[14px] pl-4 outline-none grow border-none focus:ring-transparent",
                              root: "items-center w-10/12 mx-auto mb-4 rounded-full lg:max-w-2xl hover:shadow-sm",
                              form: "flex flex-row-reverse rounded-full border-[#e9c46a] border-solid border",
                              submit: "ml-4",
                              reset: "order-first mr-4",
                          }
                      }
                      queryHook={queryHook}
                      submitIconComponent={
                          () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#264653]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                      }
                      resetIconComponent={
                          () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#264653]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                      }
                  />
                  <div className={"min-h-[1.5rem] mb-4"}>
                      <CustomRefinementList attribute="provider"/>
                  </div>
                  <hr className="border border-[#264653] w-full opacity-60 mb-4"/>
                  <Configure hitsPerPage={15}/>
                  <Hits hitComponent={Hit}/>
              </InstantSearch>
            </div>
            <Footer/>
        </div>
  )
}

export default Home
