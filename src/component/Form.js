import React from "react";

function Form(props) {
  return (
    <React.Fragment>
      <div className="w-10/12 mx-auto flex justify-center ">
        <form onSubmit={props.getWeather} className="space-x-3">
          <input type="text" placeholder="Enter the longitude.." className=" bg-white p-1  border  border-yellow-200 text-gray-600 hover:border-yellow-500 outline-none" />
          <input type="text" placeholder="Enter the lotitude.." className=" bg-white p-1  border  border-yellow-200  hover:border-yellow-500 outline-none"/>
          <button className="text-white bg-green-300 px-3 py-1">Get Waether</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Form;
