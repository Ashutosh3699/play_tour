import React, {useState} from "react";
import Tours from "./component/Tours";

import data from "./data";

const App = () => {

  const [tours,setTours] = useState(data);
  let array = [];

  function notInterestButton(id){

    const newTour = tours.filter((tour) => {
      
      if(tour.id === id){
        array.push(tour);
        console.log(array);
      }

      return tour.id !== id});

    setTours(newTour);
  }

  if(tours.length === 0){

    return(
      <div className="w-[100vw] h-[100vh] flex flex-col p-8 overflow-x-hidden overflow-y-auto justify-center items-center gap-4">
          <h3 className="text-2xl font-sans font-bold text-gray-500 capitalize">No item left</h3>

          <button onClick={()=>setTours(data)} className=" w-[250px] p-3 border bg-slate-600 shadow-md text-xl font-bold text-teal-300">Refresh</button>
      </div>
    );
  }

  return <div className="w-[100vw] h-[100vh] flex flex-col p-8 overflow-x-hidden overflow-y-auto">

    <h2 className="text-center w-[60%] rounded-lg mx-auto text-blue-600
     border-blue-400 border-dashed border-8 px-3 py-5 font-bold text-2xl my-4">Plan with love!!</h2>

    <Tours tourspot = {tours} notInterested={notInterestButton}/>

  </div>;
};

export default App;
