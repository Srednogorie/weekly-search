import {getDocument} from "./utils"
import useSWR from 'swr'
import {Article} from "../types"

export const SingleArticle = (id: string, isLogged: boolean) => {
    const { data, mutate, error } = useSWR<Article, any>(
        isLogged ? `article` : null, () => getDocument('WeeklyArticles', id),
    )
    return {
        clientArticle: data,
        isLoading: !error && !data,
        isError: error,
        mutate: mutate
    }
}
