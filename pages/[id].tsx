import React from "react"
import { useRouter } from 'next/router'
import {serverFirestore} from '../db/firebase_server'
import NavBar from "../components/NavBar"
import Detail from "../components/Detail"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {ArticleProps} from "../types"
import ClipLoader from "react-spinners/ClipLoader"

const Article: NextPage<ArticleProps> = ({article}) => {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <div className="flex h-screen">
                <div className="m-auto">
                    <ClipLoader className="!w-[60px] !h-[60px] !border-4 !border-t-[#2A9D8F] !border-r-[#2A9D8F] !border-l-[#2A9D8F]"/>
                </div>
            </div>
        )
    } else {
        if (article) {
            return (
                <div>
                    <NavBar/>
                    <Detail article={article}/>
                </div>
            );
        } else {
            return (
                <div>not found</div>
            )
        }
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Pass pats to prebuild
    // const documents = await firestore.collection("WeeklyArticles").limit(3).get();
    // const paths = documents.docs.map(entry => ({
    //     params: {
    //         id: entry.id.toString()
    //     }
    // }));
    // Don't prebuild any pages but do it on first request
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    // With fallback being true the id will always be in the context
    const params = context.params!
    const docSnapshot = await serverFirestore.collection("WeeklyArticles").doc(params.id).get()
    let entry = {...docSnapshot.data(), id: docSnapshot.id}
    entry.created = entry.created.seconds
    if (entry) {
        return {
            props: {
                article: entry
            }
        }
    } else {
        return {
            props: {}
        }
    }
}

export default Article
