function kelvinToFahrenheit(kelv) {
    return (1.8 * (kelv -273)+32).toFixed(2).toString();
}

function formatDate(isoDate){
    let date = new Date(isoDate);
    date.toLocaleString(undefined,{ weekday: "short",month: "short",day: "numeric"});
    return date;
}

function parseForecastData(data){
    return data.list.map(weather => ({
        date: formatDate(weather.dt_txt),
        temperature: kelvinToFahrenheit(weather.main.temp),
        weather: weather.weather[0].main,
        description: weather.weather[0].description,
        icon: weather.weather[0].icon
        
    }));

};

export {parseForecastData}