
import {useState} from 'react';

function CardContent({id,name,info, image,price, notInterested}){

    const [readMore,setReadMore] = useState(false);

    function readMoreFunc(){

        setReadMore(!readMore);
    }


    const description = readMore ? `${info}` :`${info.substring(0,200)}....`;

    return(

        <div className='w-[400px] m-3 flex flex-col px-4 py-4  shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] gap-y-5'>
            <img src= {`${image}`} alt='' loading='lazy' className='w-[100%]  aspect-square mx-auto object-cover' />

            <div className='flex flex-col '>
                <h3 className=' text-green-500 text-2xl font-serif font-extrabold'>₹ {price}</h3>
                <h3 className=' text-blue-400 text-2xl font-sans font-bold'>{name}</h3>
            </div>

            <div>
                {description}
                <span onClick={readMoreFunc} className=' underline capitalize cursor-pointer text-lg font-sans text-cyan-500'>{
                    readMore ? `show less`: `read more`
                }</span>
            </div>

                <button onClick={()=>notInterested(id)} 
                className=' duration-500 border border-red-400 bg-red-200 px-5 py-3 text-red-700 font-bold hover:text-white hover:bg-red-500'>
                    Not interested!
                </button>


        </div>
    );

}

export default CardContent;