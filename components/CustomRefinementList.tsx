import {useRefinementList, UseRefinementListProps} from "react-instantsearch-hooks-web"
import React from "react"

const CustomRefinementList = (props: UseRefinementListProps) => {
    const {items, refine,} = useRefinementList(props)

    if (items.length > 0) {
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
                            <span className="ais-RefinementList-labelText pl-2 italic">JavaScript Weekly</span>
                            <span className="ais-RefinementList-count pl-2 italic">{jsWeeklyCount}</span>
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
                            <span className="ais-RefinementList-count pl-2 italic">{nodeWeeklyCount}</span>
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
                            <span className="ais-RefinementList-count pl-2 italic">{reactWeeklyCount}</span>
                        </label>
                    </li>
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default CustomRefinementList
