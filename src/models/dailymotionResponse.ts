export class DailymotionResponse {
    page: number;
    limit: number;
    list: Video[];
}

export class Video {
    id: string;
    title: string;

}
