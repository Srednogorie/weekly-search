import {useRefinementList, UseRefinementListProps} from "react-instantsearch-hooks-web"
import React from "react"

type CustomUseRefinementListProps = UseRefinementListProps & {setNoHits: React.Dispatch<React.SetStateAction<boolean>>}

const CustomRefinementList = (props: CustomUseRefinementListProps) => {
    const {items, refine,} = useRefinementList(props)

    if (items.length > 0) {
        props.setNoHits(false)
        const jsWeekly = items.find(x => x.value === 'JavaScriptWeekly')
        const jsWeeklyCount = jsWeekly ? jsWeekly.count : 0
        const nodeWeekly = items.find(x => x.value === 'NodeJsWeekly')
        const nodeWeeklyCount = nodeWeekly ? nodeWeekly.count : 0
        const reactWeekly = items.find(x => x.value === 'ReactStatusWeekly')
        const reactWeeklyCount = reactWeekly ? reactWeekly.count : 0
        return (
            <div className="ais-RefinementList">
                <ul className="ais-RefinementList-list flex">
                    <li className="ais-RefinementList-item ml-4 mr-4">
                        <label className="ais-RefinementList-label cursor-pointer">
                            <input
                                onClick={() => {refine("JavaScriptWeekly")}}
                                className="ais-RefinementList-checkbox align-text-top text-current focus:outline-offset-0 cursor-pointer"
                                type="checkbox" value="JavaScriptWeekly"
                            />
                            <span className="ais-RefinementList-labelText pl-2 italic">JavaScript</span>
                            <span className="hidden sm:inline-block ais-RefinementList-count pl-1 italic">Weekly {jsWeeklyCount}</span>
                        </label>
                    </li>
                    <li className="ais-RefinementList-item ml-4 mr-4">
                        <label className="ais-RefinementList-label cursor-pointer">
                            <input
                                onClick={() => {refine("NodeJsWeekly")}}
                                className="ais-RefinementList-checkbox align-text-top text-current focus:outline-offset-0 cursor-pointer"
                                type="checkbox" value="NodeJsWeekly"
                            />
                            <span className="ais-RefinementList-labelText pl-2 italic">NodeJs</span>
                            <span className="hidden sm:inline-block ais-RefinementList-count pl-1 italic">Weekly {nodeWeeklyCount}</span>
                        </label>
                    </li>
                    <li className="ais-RefinementList-item ml-4 mr-4">
                        <label className="ais-RefinementList-label cursor-pointer">
                            <input
                                onClick={() => {refine("ReactStatusWeekly")}}
                                className="ais-RefinementList-checkbox align-text-top text-current focus:outline-offset-0 cursor-pointer"
                                type="checkbox" value="ReactStatusWeekly"
                            />
                            <span className="ais-RefinementList-labelText pl-2 italic">React</span>
                            <span className="hidden sm:inline-block ais-RefinementList-count pl-1 italic">Status {reactWeeklyCount}</span>
                        </label>
                    </li>
                </ul>
            </div>
        )
    } else {
        props.setNoHits(true)
        return null
    }
}

export default CustomRefinementList
