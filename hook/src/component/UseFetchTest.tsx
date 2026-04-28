import { Fettch } from "./useFetch";

type Movie = {
    id:number;
    title:string;
    poster:string;
}

export default function UseFetchTest(){
    const {data, loading}=Fettch<{movies:Movie[]}>('https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json',
    );
    if(loading) 
        return <p>loading...</p>

    return(
        <ul>
            {data?.movies.map((movie)=>(
                <li key ={movie.id}>{movie.title}
                <img src={movie.poster}></img>
                </li>
            ))}
        </ul>
    )
}