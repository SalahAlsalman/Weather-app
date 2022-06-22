import './App.css';
import {useState, useEffect} from "react";
import Card from "./components/Card";

function App() {
    // const [country, setCountry] = useState('');
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
        setWeather(data);
    }


    return (
        <div className="container">
            <h1 className='text-center mb-5'>Weather</h1>
            <div className="input-group m-3">
                <input onChange={onChangeCountry} value={countryCon} type="text" className="form-control"
                       placeholder="Country, City"/>
                <button onClick={onSearchClick} className="btn btn-outline-secondary" type="button">Button
                </button>
            </div>
            <div className='weather-status text-center p-4'>
                <Card key={1} description={weather.description} forecast={weather.forecast}
                      temperature={weather.temperature} wind={weather.wind}/>
            </div>
        </div>
    );
}

export default App;
