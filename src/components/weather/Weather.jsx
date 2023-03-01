import React from 'react';

const Weather = ({response, loading, error}) => {

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div style={{color: "red"}}>{error}</div>
  }
  
  return response !== null && (
    <div className="card">
      <h2>{response.location.name}</h2>
      <h3>
        {response.current.condition.text}
        <span>
          Wind {response.current.wind_kph}km/h
          <span className="dot">•</span> Precip {response.current.precip_in}%
        </span>
      </h3>
      <h1>{response.current.temp_c}°</h1>
      <div className="sky">
        <img
          style={{ width: '100%' }}
          src={response.current.condition.icon}
          alt=""
        />
      </div>
      <table>
        <thead>
          <tr>
            {/* <td>TUE</td>
          <td>WED</td>
          <td>THU</td>
          <td>FRI</td>
          <td>SAT</td> */}
            {response.forecast.forecastday.map((el,i)=>{
              const date = new Date(el.date)
              console.log(date.toString().slice(0, 3))
              return <td key={i}>{date.toString().slice(0, 3)}</td>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {response.forecast.forecastday.map((el,i)=><td key={i}>{el.day.maxtemp_c}</td>)}
          </tr>
        </tbody>
        <tfoot>
          <tr>
          {response.forecast.forecastday.map((el,i)=><td key={i}>{el.day.mintemp_c}</td>)}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Weather;
