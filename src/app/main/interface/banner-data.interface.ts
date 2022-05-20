export interface Banner {
    data: Datum[];
}

export interface Datum {
    background_img: string;
    img:            string;
    title:          string;
    body:           string;
    position:       string;
    _id:            number;
}
