import React, {useState} from "react"
import {deleteDocument, updateDocument} from "../db/utils"
import {useSWRConfig} from "swr"
import {useRouter} from "next/router"
import {ArticleProps} from "../types"

const AdminButtons: React.FC<ArticleProps> = ({article}) => {
    const { mutate } = useSWRConfig()
    const [buttonText, setButtonText] = useState(!article.protected ? "Protect" : "Unprotect")
    const router = useRouter()
    const handleProtect = async () => {
        try {
            await updateDocument(article.id, {protected: !article.protected}, "WeeklyArticles")
            await mutate("article")
            buttonText === "Protect" ? setButtonText("Unprotect") : setButtonText("Protect")
        } catch (e) {
            console.log(e)
        }
    }
    const handleDelete = async () => {
        try {
            await deleteDocument("WeeklyArticles", article.id)
            void await router.push('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="flex justify-around mt-12">
            <button onClick={handleProtect} className="bg-transparent text-[#264653] font-semibold py-2 px-4 border border-[#e9c46a] rounded hover:shadow">
                {buttonText}
            </button>
            <button onClick={handleDelete} className="bg-transparent text-[#264653] font-semibold py-2 px-4 border border-[#e9c46a] rounded hover:shadow">
                Delete
            </button>
        </div>
    )
}

export default AdminButtons
