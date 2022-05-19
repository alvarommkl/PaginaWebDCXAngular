export interface NewsUpdate {
    news_updates: NewsUpdateElement[];
}

export interface NewsUpdateElement {
    title: string;
    body:  string;
    date:  string;
    image: string;
}
