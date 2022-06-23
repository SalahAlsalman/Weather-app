import './App.css';
import {useState, useEffect} from "react";
import Card from "./Card";

function App() {
    const [country, setCountry] = useState('');
    const [countryCon, setCountryCon] = useState('');
    const [weather, setWeather] = useState({description: '', forecast: [], temperature: '', wind: ''});

    useEffect(() => {
        const fetchDataApi = async () => {
            const request = await fetch('https://goweather.herokuapp.com/weather/saudi');
            const data = await request.json();
            setWeather(data);
        }
        fetchDataApi();
    }, []);

    const onChangeCountry = (e) => {
        setCountryCon(e.target.value)
    }
    const onSearchClick = async (e) => {
        const request = await fetch('https://goweather.herokuapp.com/weather/' + countryCon)
        const data = await request.json();
        setCountry(countryCon);
        setWeather(data);
    }


    return (
        <div className="container">
            <div className="row">
            <h1 className='text-center mb-5'>Weather</h1></div>
            <div className="row">
            <div className="input-group m-3 w-100">
                <input onChange={onChangeCountry} value={countryCon} type="text" className="form-control"
                       placeholder="Country, City"/>
                <button onClick={onSearchClick} className="btn btn-outline-secondary" type="button">Search
                </button>
            </div></div>
            <div className="row">
            <div className='col-12 weather-status text-center justify-content-center'>
                <Card key={1} description={weather.description} forecast={weather.forecast}
                      temperature={weather.temperature} wind={weather.wind}/>
            </div></div>
        </div>
    );
}

export default App;
