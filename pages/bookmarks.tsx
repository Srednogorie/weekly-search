import {GetStaticProps, NextPage} from "next"
import NavBar from "../components/NavBar"
import React from "react"
import {serverFirestore} from "../db/firebase_server"
import {colorMap} from "../utils"
import {Article, BookmarkProps} from "../types"
import {DocumentSnapshot} from "@firebase/firestore-types"

const Bookmarks: NextPage<BookmarkProps> = ({articles}) => {
    return (
        <>
            <NavBar/>
            <div className={"mt-12"}>
                {articles.map((article) => {
                    let classString = `block p-4 ml-4 mr-4 sm:ml-28 sm:mr-28 mt-8 bg-white rounded-lg border-[3px] ${colorMap[article.provider][0]} shadow hover:shadow-md ${colorMap[article.provider][1]} hover:bg-opacity-10`;
                    return (
                        <a key={article.id} href={`/${article.id}`} className={classString}>
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-[#264653]">{article.title}</h5>
                            <p className="font-normal text-[#264653]">{article.description}</p>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const articles: Article[] = []
    await serverFirestore.collection("WeeklyArticles")
        .where("protected", "==", true).orderBy("created").limit(10).get()
        .then((docsSnapshot: DocumentSnapshot[]) => {
            docsSnapshot.forEach((doc) => {
                let entry = {...doc.data(), id: doc.id} as Article
                entry.created = entry.created.seconds
                articles.push(entry)
            })
        })
    return {
        props: {
            articles: articles
        }
    }
}

export default Bookmarks;
