import {React, useState, useEffect} from 'react';
import CardBody from "./CardBody";

function Card(props) {
    const [forecast, setForecast] = useState()
    useEffect(() => {
        setForecast(props.forecast)
        console.log(forecast)
    }, []);

    return (
        <div className="card w-100" style={{width: "18rem"}}>
            <CardBody description={props.description} temperature={props.temperature}/>
            {/*{props.forecast.temperature.map((data, index) => <CardBody key={index} description={data}*/}
            {/*                                                           temperature={data}/>)}*/}

        </div>
    );
}

export default Card;