import React, {Fragment, useEffect, useState} from "react"
import {useIsUserLogged} from "../hooks"
import {SingleArticle} from "../db/fetchers"
import AdminButtons from "./AdminButtons"
import {ArticleProps, ProviderMapInterface} from "../types"
import moment from "moment";


const Detail: React.FC<ArticleProps> = ({article}) => {
    const {provider} = article
    const date = moment(article.created * 1000).format("MMMM Do YYYY")
    const isLogged = useIsUserLogged()
    const providerMap: ProviderMapInterface = {
        "JavaScriptWeekly": ["border-[#f4a261]", "hover:bg-[#f4a261]", "https://javascriptweekly.com/issues/", "JavaScript Weekly"],
        "NodeJsWeekly": ["border-[#2a9d8f]", "hover:bg-[#2a9d8f]", "https://nodeweekly.com/issues/", "Node Weekly"],
        "ReactStatusWeekly": ["border-[#e76f51]", "hover:bg-[#e76f51]", "https://react.statuscode.com/issues/", "React Status"],
    }
    let classString = `block p-4 ml-4 mr-4 sm:ml-28 sm:mr-28 mt-28 bg-white rounded-lg border-[3px] ${providerMap[provider][0]} shadow hover:bg-opacity-10`

    const [canFetch, setCanFetch] = useState(false)
    const {clientArticle, isLoading, isError, mutate} = SingleArticle(article.id, canFetch)

    useEffect(() => {
        if (isLogged) {
            setCanFetch(true)
        }
    }, [isLogged])

    return (
        <>
            <article className={classString}>
                <p className="font-normal text-[#264653] text-xs mb-1">{date}</p>
                {
                    article.article_url.length > 0 && article.article_url[0].length > 0 ?
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-[#264653] underline italic">
                            <a href={article.article_url[0]} rel="noreferrer" target="_blank">{article.title}</a>
                        </h5> :
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-[#264653]">{article.title}</h5>
                }
                <p className="font-normal text-[#264653]">{article.description}</p>
                {article.article_additional_urls.length > 0 && (
                    <Fragment>
                        <p className="text-sm text-[#264653] mt-3 font-semibold">Additional Urls</p>
                        <ul>
                            {article.article_additional_urls.map(url => (
                                <li key={url}>
                                    <a href={url} target="_blank" rel="noreferrer" className="text-sm text-[#264653] underline italic font-normal">{url}</a>
                                </li>
                            ))}
                        </ul>

                    </Fragment>
                )}
                <div className="font-normal text-[#264653] text-sm mt-3 font-semibold">
                    Source
                    <p>
                        <a rel="noreferrer" href={providerMap[provider][2] + article.issue_number} target="_blank" className="underline italic font-normal">
                            {providerMap[provider][3]}
                        </a>
                    </p>
                </div>
                {(clientArticle && clientArticle.protected) && <p className="text-red-400">PROTECTED</p>}
            </article>
            {(isLogged && clientArticle) && <AdminButtons article={clientArticle}/>}
        </>
    )
}

export default Detail
