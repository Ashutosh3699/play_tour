
import CardContent from "./CardContent";


function Tours({tourspot, notInterested}){

    return(

        <div className=" flex flex-row justify-center items-start flex-wrap w-[90%] mx-auto mt-10" >
        {
            tourspot.map((tour)=>{

                return (<CardContent key={tour.id} {...tour} notInterested={notInterested}/>);
            })
        }

        </div>

    );
}

export default Tours;