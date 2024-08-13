import { useState } from "react";
import {useNavigate } from "react-router-dom";
const bodyGuard5 = "../public/background/bg5.png"
const data1 = [{
    name: "Personal security",
    img: "../public/images/Personalsecurity.JPEG"
},
{
    name: "Corporate security",
    img: "../public/images/CorporateSecurity.JPEG"
},
{
    name: "Event Security",
    img: "../public/images/EventSecurity.JPEG"
},
{
    name: "Aviation Security",
    img: "../public/images/AviationSecurity.JPEG"
},
{
    name: "Transportation Security",
    img: "../public/images/TransportationSecurity.JPEG"
},
]

function Service() {
    const [data, setData] = useState(data1)
    const navigate = useNavigate()
    const handlerRead = (service) => {
        navigate(service.name, {state:{service}})
    }
    
    return (
        <>
            {/* main */}
            <img className="object-cover w-full h-[600px]" src={bodyGuard5} alt="bodyGuard5" />
            <div className="flex space-x-3 text-3xl mx-24 my-7">
                <p>Home</p>
                <p>/</p>
                <p className="text-[#ffac41]">Services</p>
            </div >
            <div className="mt-[50px] mx-24">
            <div className="w-full h-fit grid grid-cols-3 gap-4">
                {/* col1 */}
              
                {
                    data.map((item, index) => {
                        return(
                        <div key={`image${index+1}`} className="relative group col-span-1 h-[350px] mb-9">
                                <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                            <div className="absolute top-0 flex w-full h-2/3 items-center justify-center p-3">
                                 <h1 className="text-black text-[35px] font-serif bg-white bg-opacity-20 ">{item.name}</h1>
                            </div>
                        
                          <div className="absolute top-0 w-full h-full bg-opacity-25 bg-white transition-all ease-linear duration-300  group-hover:w-0">
            
                        </div>   
                  
                            <button className="absolute w-[200px] h-fit bg-white bottom-20 right-10 border-2 border-[#ffac41] rounded-lg mx-4 hover:bg-[#ffac41]"
                                    onClick={() => handlerRead(item)}
                            >
                                 <span className="p-1 block w-full text-[22px] text-[#ffac41] hover:text-white ">Read More</span>
                            </button>
                        </div>
                    )
                        }
                    )
                }
    
                </div>
            </div>
             {/* main */}
             </>
     );
}

export default Service;