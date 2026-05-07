import { useEffect, useState } from "react";
import type { WeatherData } from "../WeatherData";
import './WeatherCard.css'

export default function WeatherCard(){
    const [weather,setWeather]=useState<WeatherData | null >(null);

    // useEffect(() => {   
    //     const fetchWeather =async() => {
    //         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lang=kr&q=seoul`);
    //         if(!response){
    //             throw new Error('요청 실패');
    //         }
    //         const data: WeatherData = await response.json();
    //         setWeather(data);
    //     }
    //     fetchWeather();
    // },[]);
    //이건 서울의 좌표를 지정해서 그 좌표대로 날씨가 뜬다.

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(
            async (position)=>{ //형추론 으로 인하여, position에 타입을 적지 않아도 돼
                const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lang=kr&lat=${lat}&lon=${lon}`);
                const data = await response.json();
                setWeather(data)
            },
            (error)=>{
                console.log(error)
            }
        )
    },[])
    //사용자의 위도 경도를 가져와서 사용자에 위치에 맞게 날씨를 알려주기 위함

    //weather이 받아오기전 null 상태를 계산해야함(?넣어도 나쁘지않음)
    if(!weather){
        return <div>날씨를 불러 오는 중. . .</div>
    }
    //weather?.weather형태로 사용했는데... 이 if문을 추가하고 부터 빨간줄이 사라졌다. weahter이 null인경우 규칙을 지정했기 때문에
    //weahter?.형태로 사용하지 않아도 된다.

    const icon = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const description = weather.weather[0].description;
    const temp = weather.main.temp.toFixed(1);
//Icon에 관련된 애를 useEffect안에 넣었다가 안되는 경우가 있었다. 데이터 통신중이 끝나야 뭘 하는건데
//거기서 했으니 문제..
return(
    <div className="weather-container">
        <img src={iconUrl}/>
        <p>{description} | {temp}</p>
        
    </div>
)
}