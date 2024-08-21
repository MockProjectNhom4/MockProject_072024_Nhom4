import Search from "antd/es/input/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan  } from '@fortawesome/free-solid-svg-icons';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Pagination, Modal, Popconfirm} from "antd";
import EquipmentEdit from "./equipmentEdit/EquipmentEdit"
import { useState } from "react";
import EquipmentAdd from "./equipmentAdd/EquipmentAdd";
function Equipment() {
    const [isOpen, setIsOpen] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const dataTable = [
        {   id: 1,
            name: "jhoin1",
            Unit: "Price ",
            quantity: 100,
            status: "In Stock"
        },
        {   id: 2,
            name: "jhoin2",
            Unit: "Price ",
            quantity: 100,
            status: "In Stock"
        },
        {   id: 3,
            name: "jhoin3",
            Unit: "Price ",
            quantity: 100,
            status: "In Stock"
        },
        {   id: 4,
            name: "jhoin4",
            Unit: "Price ",
            quantity: 100,
            status: "In Stock"
        },
        {   id: 5,
            name: "jhoin5",
            Unit: "Price ",
            quantity: 100,
            status: "In Stock"
        },
    ]
    const handlerOpen = () => {
        setIsOpen(true)
    }
    const handleCancel = () => {
        setIsOpen(false)
      }
    const handlerCancelAdd = () => {
        setIsAdd(false)
    }
    const handlerOpenlAdd = () => {
        setIsAdd(true)
    }
    
    return ( 
        // main
        <div className="flex-1">
            {/* container */}
            <div className="flex flex-col items-center w-full h-fit lg:p-11 space-y-4">
                <Search className="w-2/4"/>
                <h1 className="text-[2rem]">
                    Equipment list
                </h1>
                <div className="w-full lg:p-2 space-y-4">
                    <button
                    onClick={handlerOpenlAdd} 
                    className="mx-2 p-2 min-w-24 w-32 rounded-lg outline outline-1 outline-offset-2 outline-black text-[1.5rem] hover:bg-black hover:text-white">
                        Add
                    </button>
                                <Modal
                    open={isAdd}
                    onCancel={handlerCancelAdd}
                    footer={[]}
                    width={'100%'}
                    style={{maxWidth:800}}
                    > 
                    <EquipmentAdd onCancel={handlerCancelAdd}/>
                    </Modal>
                    <table className='table-auto min-w-[200px] w-full mx-2 overflow-hidden text-left text-[1.5rem] border-collapse border border-spacing-2 border-slate-400 rounded-3xl min-h-[200px] bg-white'>
                            <thead className='w-full h-[50px] bg-zinc-900 text-white'>
                                <tr className='border border-slate-300'>
                                    <th className='p-5'>
                                        ID
                                    </th>
                                    <th className='p-5'>
                                        Name
                                    </th>
                                    <th className='p-5'>
                                        Unit
                                    </th>
                                    <th className='p-5'>
                                        Quantity
                                    </th>
                                    <th className='p-5'>
                                        Status
                                    </th>
                                    <th className='p-5 text-center'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataTable.map( (item) => {
                                        return(
                                            <tr key={item.key} className='border border-slate-300 text-stone-700'>
                                                 <td className='p-5'>
                                                    {item.id}
                                                </td>
                                                <td className='p-5'>
                                                    {item.name}
                                                </td>
                                                <td className='p-5'>
                                                    {item.Unit}
                                                </td>
                                                <td className='p-5'>
                                                    {item.quantity}
                                                </td>
                                                <td className='p-5'>
                                                    {item.status}
                                                </td>
                                                <td className='p-5 text-center space-x-9'>
                                                    <button className='hover:border  hover:border-black size-10 bg-gradient-to-r from-pink-800 via-black ' onClick={() => handlerOpen()}>

                                                        <FontAwesomeIcon icon={faPenToSquare} style={{color:'white'}}/>
                                                        
                                                    </button>
                                                    <Popconfirm
                                                        title='Delete the equipment?'
                                                        onConfirm={()=>{}}
                                                        description="Are you sure to delete this equipment?"
                                                        placement="leftTop"
                                                        icon={
                                                            <QuestionCircleOutlined
                                                                style={{
                                                                    color: 'red',
                                                                }}
                                                            />
                                                        }
                                                    >
                                                    <button className='hover:border  hover:border-black size-10 bg-gradient-to-r from-pink-800 via-black ' >

                                                        <FontAwesomeIcon icon={faTrashCan} style={{color:'white'}}/>
                                                        
                                                    </button>
                                                    </Popconfirm>
                                                </td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                        <div >
                            <Pagination className="justify-end" />
                        </div>
                        <Modal
                            open={isOpen}
                            onCancel={handleCancel}
                            footer={[]}
                            width={'100%'}
                            style={{maxWidth:800}}
                            
                        >
                            <EquipmentEdit/>
                        </Modal>

                </div>
            </div>
        </div>
     );
}

export default Equipment;