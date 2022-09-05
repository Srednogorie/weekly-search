export type ProviderMapInterface = {
    [key: string]: Array<string>
}

export interface Article {
    created: any, title: string, description: string, id: string, provider: string, issue_number: number,
    article_additional_urls: string[], article_url: string[], protected?: boolean,
}

export interface ArticleProps {
    article: Article
}

export interface BookmarkProps {
    articles: Article[]
}

export type ColorMapInterface = {
    [key: string]: Array<string>
}
