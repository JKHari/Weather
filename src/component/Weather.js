import React from "react";

const Weather = (props) => (
  <React.Fragment>
    <div className="w-8/12  flex flex-col p-5 justify-center mx-auto mt-5 ">
      <div className="mx-auto p-2 ">
        {props.longitude && props.lattitude && (
          <p className="text-lg px-2 ">
            Location :
            <span className="px-2 text-green-600">
              {props.longitude}, {props.lattitude}
            </span>
          </p>
        )}
      </div>
      <div className="mx-auto p-2 ">
        {props.temperature && (
          <p className="text-lg px-2 ">
            Temperature :
            <span className="px-2 text-green-600"> {props.temperature}</span>
          </p>
        )}
      </div>

      <div className="mx-auto p-2 ">
        {props.humidity && (
          <p className="text-lg px-2 ">
            Humidity :
            <span className="px-2 text-green-600"> {props.humidity}</span>
          </p>
        )}
      </div>

      <div className="mx-auto p-2 ">
        {props.description && (
          <p className="text-lg px-2 ">
            Description :
            <span className="px-2 text-green-600"> {props.description}</span>
          </p>
        )}
      </div>

      <div className="mx-auto  ">
        {props.wind && (
          <p className="text-lg px-2 ">
            Wind :<span className="px-2 text-green-600"> {props.wind}</span>
          </p>
        )}
      </div>

      <div className="mx-auto  ">
        {props.error && <p className="px-2 text-red-600">{props.error}</p>}
      </div>
    </div>
  </React.Fragment>
);

export default Weather;
