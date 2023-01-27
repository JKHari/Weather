import React from "react";

function Form(props) {
  return (
    <React.Fragment>
      <div className="flex justify-center w-10/12 mx-auto ">
        <form onSubmit={props.getWeather} className="space-x-3">
          <input type="text" placeholder="Enter the longitude.." className="p-1 text-gray-600 border border-yellow-200 outline-none bg-slate-50 hover:border-yellow-500" />
          <input type="text" placeholder="Enter the lotitude.." className="p-1 border border-yellow-200 outline-none bg-slate-50 hover:border-yellow-500"/>
          <button className="px-3 py-1 text-white bg-green-600 hover:bg-green-500">Get Waether</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Form;
