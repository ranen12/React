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



interface Document{

    documents:{
        authors:string[],
        contents:string;
        datetime:string;
        isbn:string;
        translators:string[]
    }[]
    meta:{is_end:false; pageable_count:number;},
}

//한개로 만든다면 이런느낌

interface DocumentBook{
        authors:string[],
        contents:string;
        datetime:string;
        isbn:string;
        translators:string[]

}//낱개포장

interface Meta{
    is_end:false;
    pageable_count:number;
}
interface api{
    document:DocumentBook[]
    meta:Meta;
}

