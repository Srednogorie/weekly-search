import type { NextPage } from 'next';
import Image from "next/image";
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, Hits, Configure, Index, RefinementList} from 'react-instantsearch-hooks-web';
import {Fragment} from "react";
import { useRefinementList } from 'react-instantsearch-hooks-web';
import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";

const searchClient = algoliasearch('102G7MJ54T', '6154281b9b6650ad065311366150fab5');


// @ts-ignore
function Hit({hit}) {
    const dateTime = new Date(hit.created).toLocaleDateString();
    return (
        <a href="#" className="
        block p-4 ml-4 mr-4 sm:ml-28 sm:mr-28 mt-8 bg-white rounded-lg border-[3px] border-[#e76f51]
        shadow hover:shadow-md hover:bg-[#e76f51] hover:bg-opacity-10">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-[#264653]">{hit.title}</h5>
            <p className="font-normal text-[#264653]">{hit.description}</p>
        </a>
    );
}

function queryHook(query: any, search: (arg0: any) => void) {
    // @ts-ignore
    if (timerId) {
        // @ts-ignore
        clearTimeout(timerId);
    }

    let timerId = setTimeout(() => search(query), 1000);
}
const labelMap = {
    "JavaScriptWeekly": "JavaScript Weekly",
    "NodeJsWeekly": "NodeJs Weekly",
    "ReactStatusWeekly": "React Status",
}

function CustomRefinementList(props: any) {
    const {items, refine,} = useRefinementList(props);



    if (items.length > 0) {
        let JsWeekly = items.find(x => x.value === 'JavaScriptWeekly');
        JsWeekly = JsWeekly ? JsWeekly.count : 0;
        let NodeWeekly = items.find(x => x.value === 'NodeJsWeekly');
        NodeWeekly = NodeWeekly ? NodeWeekly.count : 0;
        let ReactWeekly = items.find(x => x.value === 'ReactStatusWeekly');
        ReactWeekly = ReactWeekly ? ReactWeekly.count : 0;
        return (
            // eslint-disable-next-line react/jsx-key
            <div className="ais-RefinementList mb-4">
                <ul className="ais-RefinementList-list flex">
                    <li className="ais-RefinementList-item ml-4 mr-4">
                        <label className="ais-RefinementList-label cursor-pointer">
                            <input
                                onClick={() => {refine("JavaScriptWeekly")}}
                                className="ais-RefinementList-checkbox align-text-top text-current focus:outline-offset-0 cursor-pointer"
                                type="checkbox" value="JavaScriptWeekly"
                            />
                            <span className="ais-RefinementList-labelText pl-2 italic">JavaScript Weekly</span>
                            <span className="ais-RefinementList-count pl-2 italic">{JsWeekly}</span>
                        </label>
                    </li>
                    <li className="ais-RefinementList-item ml-4 mr-4">
                        <label className="ais-RefinementList-label cursor-pointer">
                            <input
                                onClick={() => {refine("NodeJsWeekly")}}
                                className="ais-RefinementList-checkbox align-text-top text-current focus:outline-offset-0 cursor-pointer"
                                type="checkbox" value="NodeJsWeekly"
                            />
                            <span className="ais-RefinementList-labelText pl-2 italic">NodeJs Weekly</span>
                            <span className="ais-RefinementList-count pl-2 italic">{NodeWeekly}</span>
                        </label>
                    </li>
                    <li className="ais-RefinementList-item ml-4 mr-4">
                        <label className="ais-RefinementList-label cursor-pointer">
                            <input
                                onClick={() => {refine("ReactStatusWeekly")}}
                                className="ais-RefinementList-checkbox align-text-top text-current focus:outline-offset-0 cursor-pointer"
                                type="checkbox" value="ReactStatusWeekly"
                            />
                            <span className="ais-RefinementList-labelText pl-2 italic">React Status</span>
                            <span className="ais-RefinementList-count pl-2 italic">{ReactWeekly}</span>
                        </label>
                    </li>
                </ul>
            </div>
        )
    }
}

const Home: NextPage = () => {
    return (
      <Fragment>

          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-6">
              <div className="container flex flex-wrap justify-between items-center mx-auto">
                  <div className="relative w-40 h-10">
                      <a href="" className="flex items-center">
                          <Image src="/JsSearch.png" className="mr-3 h-6 sm:h-9" alt="JsSearch Logo" layout="fill"/>
                      </a>
                  </div>
                  <div id="navbar-default">
                      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 text-[#264653]">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

          <div className="flex flex-col items-center justify-start h-screen mt-6">
              <InstantSearch searchClient={searchClient} indexName="JsWeeklyArticles">
                  <SearchBox
                      classNames={
                          {
                              input: "bg-transparent rounded-full py-[14px] pl-4 outline-none grow border-none focus:ring-transparent",
                              root: "items-center w-10/12 mx-auto mb-4 rounded-full lg:max-w-2xl hover:shadow-md",
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
                  <CustomRefinementList attribute="provider"/>
                  <hr className="border border-[#264653] w-full opacity-60 mb-4"/>
                  <Configure hitsPerPage={5}/>
                  <Hits hitComponent={Hit}/>
              </InstantSearch>
          </div>
      </Fragment>

  )
}

export default Home
