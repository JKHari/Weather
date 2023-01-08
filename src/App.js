import React, { Component } from "react";
import Title from "./component/Title";
import Form from "./component/Form";
import Weather from "./component/Weather";
class App extends Component {
  state = {
    longitude: undefined,
    lattitude: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const longitude = e.target[0].value;
    const lattitude = e.target[1].value;
    const api_call = await fetch(
      `https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${lattitude}`,
      { method: "get" }
    );
    console.log(api_call);
    // await wait for the some minutes becaues the server performance some time is too slow or lot lof the reson here so wait for the some minutes
    const data = await api_call.json();
    if (longitude && lattitude) {
      this.setState({
        longitude: data.coord.lon,
        lattitude: data.coord.lat,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: "",
      });
    } else {
      this.setState = {
        longitude: undefined,
        lattitude: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: undefined,
      };
    }
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="w-full bg-cover h-screen mx-auto bg-back bg-center  shadow-xl flex flex-col items-center justify-center">
          <Title />
          <Form getWeather={this.getWeather} />
          <Weather
            longitude={this.state.longitude}
            lattitude={this.state.lattitude}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            description={this.state.description}
            wind={this.state.wind}
            error={this.state.error}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
