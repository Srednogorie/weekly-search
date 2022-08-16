import React from "react"
interface Props {
    hit: {"created": any, "title": string, "description": string, "objectID": string, "provider": string}
}

type ColorMapInterface = {
    [key: string]: Array<string>
}
const Hit: React.FC<Props> = ({hit}) => {
    const {objectID, provider} = hit
    const colorMap: ColorMapInterface = {
        "JavaScriptWeekly": ["border-[#f4a261]", "hover:bg-[#f4a261]"],
        "NodeJsWeekly": ["border-[#2a9d8f]", "hover:bg-[#2a9d8f]"],
        "ReactStatusWeekly": ["border-[#e76f51]", "hover:bg-[#e76f51]"],
    };
    let classString = `block p-4 ml-4 mr-4 sm:ml-28 sm:mr-28 mt-8 bg-white rounded-lg border-[3px] ${colorMap[provider][0]} shadow hover:shadow-md ${colorMap[provider][1]} hover:bg-opacity-10`;
    return (
        <a key={objectID} href={`/${objectID}`} className={classString}>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-[#264653]">{hit.title}</h5>
            <p className="font-normal text-[#264653]">{hit.description}</p>
        </a>
    );
}

export default Hit
