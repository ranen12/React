import { useEffect,useState } from "react";

interface Movie{
    id:number;
    title:string;
    poster:string;
}
type MovieResponse ={
    movies:Movie[];
    count:number;
}

export default function UseEffectMovie(){
    const[movies,setMovies]=useState<Movie[]>([]);
    useEffect(()=>{
        const load = async()=>{
            const res = await fetch('https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json');
            const data:MovieResponse = await res.json();
            setMovies(data.movies);
        }
        load();
    },[]);

    return(
        <div style ={container}>
            {movies.map((movie) => (
                <div style ={card} key ={movie.id}>
                  <img src={movie.poster} alt={movie.title} style={image}/>
                  <div style ={title}>{movie.title}</div>
                </div>
            ))}
        </div>
    );
    }



    const container: React.CSSProperties ={
        display: 'flex', //꽉차게
        flexWrap:'wrap',//줄바꿔
        gap:'20px',
        justifyContent:'center',//가운데정렬할게요
        overflow:'hidden',//너무많은건 가려줘
        alignItems:'center',
        minHeight:'100vh',
    }

    const card:React.CSSProperties ={
        width : '200px',
        height: '400px',
        border:'1px solid #ddd',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        boxShadow:'7px 10px 21px -3px rgba(0,0,0,0.75)',
    }

    const image:React.CSSProperties ={
        width:'100%',
        height:'90%',
        objectFit:'cover',//비율깨지는거보다 그림이 짤리는게 낫다.

    }

    const title:React.CSSProperties={
        height:'10%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'1.2rem',//상대적단위
        fontWeight:'bold',
        padding:'5px',
    }