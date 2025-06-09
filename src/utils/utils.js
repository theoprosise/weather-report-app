function kelvinToFahrenheit(kelv) {
    return (1.8 * (kelv -273)+32).toFixed(2).toString();
}

function formatDate(isoDate){
    let date = new Date(isoDate);
    return date.toLocaleString(undefined,{ weekday: "short",month: "short",day: "numeric"});
}

function parseForecastData(data){
    let all = data.list.map(weather => ({
        date: formatDate(weather.dt_txt),
        temperature: kelvinToFahrenheit(weather.main.temp),
        weather: weather.weather[0].main,
        description: weather.weather[0].description,
        icon: weather.weather[0].icon
        
    }));

    return all.reduce((unique, item) => {
        if(!unique.find(d => d.date === item.date)){
            unique.push(item);
        }
        return unique;
    }, [])
};


export {parseForecastData}