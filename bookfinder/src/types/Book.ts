export interface Book{
    authors:string[];
    contents:string;
    datetime:string;
    isbn:string;
    price:number;
    publisher:string;
    sale_price:number;
    status:string;
    thumbnail:string;
    title:string;
    translators:string[]
    url:string;

}

export type ApiResponse<T> ={
    documents:T[];
    meta: {is_end:boolean;}
}
//받아왔을때 타입 지정