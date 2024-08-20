import {  Modal } from 'antd';
import { useEffect, useState } from 'react';
import RateOfCustomer from './detailRate/DetailRate';


function Rate() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [itemData, setItemData] = useState([])
    useEffect(() => {
        const fetchData = [
            {
                id: 1,
                name: "Rate of Customer"
            },
            {
                id: 2,
                name: "Rate of Supervisor"
            },
            {
                id: 3,
                name: "Rate of Trainer"
            },
            ]
    setData(fetchData)
    },[])
    const handlerRateOfCustomer = (data, index) => {
        setIsModalOpen(true);
        console.log("index",index )
        const item =  data.filter((item) =>  item.id === index )
        setItemData(item)      
    }
    const onClose = () => {
        setIsModalOpen(false);
    }
    return ( 
        <div className='w-screen h-screen bg-white pt-10 lg:flex lg:justify-center'>
            <div className="flex flex-col items-center w-full lg:w-[1200px] lg:bg-stone-600 lg:rounded-xl lg:p-10 lg:h-fit px-2 pb-4">
                {/* Content */}
                <div className="flex flex-col justify-center w-full min-h-[400px] h-full p-7 space-y-10 lg:space-y-0 ">
                <h1 className="text-center items-start text-[2.5rem] lg:text-[2.8rem] mb-14 text-[#ff1e56] font-bold">Rate</h1>
                    <div className="flex flex-col lg:flex-row justify-center w-full  p-7 space-y-10 lg:space-y-0 lg:justify-between ">
                        {
                            data.map((item, index) => {
                                return(
                                <>
                                    <div key={item.id} onClick={() => handlerRateOfCustomer( item = [item], index + 1)} className="bg-[#ffac41] flex justify-center items-center min-h-[50px] lg:max-w-[400px] lg:w-[300px] lg:min-h-[300px]  h-full text-center text-[1.5rem] lg:text-[1.8rem] lg:lg:max-w-[400px]  p-2 rounded-md">
                                        <span>{item.name}</span>
                                    </div><Modal
                                        open={isModalOpen}
                                        onCancel={onClose}
                                        footer={[]}
                                        width='100%'
                                    >
                                            <RateOfCustomer data={itemData} />
                                        </Modal>
                                </>
                                )
                            })
                           
                            
                        } 
                    </div>
                </div>
                <div className="bg-white w-full flex justify-center rounded-md">
                <img className="size-2/3 lg:size-1/5" src="../public/images/CupRating.jpg" alt="Cup" />
                </div>
            </div>
        </div>
     );
}

export default Rate;