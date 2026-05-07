export type WeatherData ={
    name:string;
    weather: {
            // "id": 804,
            // "main": "Clouds",
            description: string;
            icon: number;
        }[]//객체낱개포장을 안만들고 그냥 한번에 {}로 직어넣고 옆에 배열임을 표시하였음.
    main:{
        temp:number;
    }
}


// interface Weather {
//     description:string;
//     icon:string;
// }

// interface WeatherType {
//     weather:Weather[]
// }형태 





//노트북데이터
// {
//     "coord": {
//         "lon": 126.9063,
//         "lat": 37.4633
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "온흐림",
//             "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 20.52,
//         "feels_like": 19.83,
//         "temp_min": 20.52,
//         "temp_max": 20.52,
//         "pressure": 1013,
//         "humidity": 46,
//         "sea_level": 1013,
//         "grnd_level": 1006
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 6.16,
//         "deg": 224,
//         "gust": 8.72
//     },
//     "clouds": {
//         "all": 95
//     },
//     "dt": 1778119223,
//     "sys": {
//         "country": "KR",
//         "sunrise": 1778099477,
//         "sunset": 1778149595
//     },
//     "timezone": 32400,
//     "id": 1948005,
//     "name": "Kwangmyŏng",
//     "cod": 200
// }