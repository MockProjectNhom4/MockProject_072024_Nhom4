import  {DatePicker} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function TimeKeeping() {
    const navigate =  useNavigate ()
    const dataTimeKeeping = [{

    }
    ]
    const dataTable = [{
        key: 1,
        date: "08/2024",
        total: 7,
        overtime: 2,
        off: 3,
        sub: [
            {   date: "Monday",
                start: "6:30pm",
                finish: "8:30pm"
            },
            {   
                date: "Tuesday",
                start: "6:30pm",
                finish: "8:30pm"
            },
            {   date: "Wednesday",
                start: "6:30pm",
                finish: "8:30pm"
            }
        ]
    },
    {
        key: 2,
        date: "09/2024",
        total: 7,
        overtime: 2,
        off: 3,
        sub: [
            {
                start: "6:30pm",
                finish: "8:30pm"
            },
            {   
                date: "Tuesday",
                start: "6:30pm",
                finish: "8:30pm"
            },
            {   date: "Wednesday",
                start: "6:30pm",
                finish: "8:30pm"
            }
        ]
    },
    {
        key: 3,
        date: "10/2024",
        total: 7,
        overtime: 2,
        off: 3,
        sub: [
            {   date: "Monday",
                start: "6:30pm",
                finish: "8:30pm"
            },
            {   
                date: "Tuesday",
                start: "6:30pm",
                finish: "8:30pm"
            },
            {   date: "Wednesday",
                start: "6:30pm",
                finish: "8:30pm"
            }
        ]
    },
    
    ]
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    const onClickSee = (data) => {
        navigate(`${data.key}`, {state: data})
    }
    return ( 
        // Container
            <div className='w-screen h-auto pt-10 lg:flex lg:justify-center'>
                    <div className="flex flex-col items-center w-full lg:w-[1200px] lg:bg-stone-600 lg:rounded-xl lg:p-10 px-2 pb-4 space-y-7">
                        <h1 className='text-[2.5rem] text-[#ff1e56] font-bold'>TIMEKEEPING</h1>
                        <div className='w-2/3'>
                            <DatePicker picker='month' style={{width:'100%', height:40, fontSize: 20}} onChange={onChange}/>
                        </div>
                    
                        <table className='table-auto min-w-[200px] w-full mx-2 overflow-hidden text-left text-[1.5rem] border-collapse border border-spacing-2 border-slate-400 rounded-3xl min-h-[200px] bg-white'>
                            <thead className='w-full h-[50px] bg-zinc-900 text-white'>
                                <tr className='border border-slate-300'>
                                    <th className='p-5'>
                                        No
                                    </th>
                                    <th className='p-5'>
                                        Date
                                    </th>
                                    <th className='p-5'>
                                        Total
                                    </th>
                                    <th className='p-5'>
                                        Overtime
                                    </th>
                                    <th className='p-5'>
                                        Off
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
                                                    {item.key}
                                                </td>
                                                <td className='p-5'>
                                                    {item.date}
                                                </td>
                                                <td className='p-5'>
                                                    {item.total}
                                                </td>
                                                <td className='p-5'>
                                                    {item.overtime}
                                                </td>
                                                <td className='p-5'>
                                                    {item.off}
                                                </td>
                                                <td className='p-5 text-center'>
                                                    <button className='hover:border  hover:border-black size-10 bg-gradient-to-r from-pink-800 via-black ' onClick={()=> onClickSee(item) }>

                                                        <FontAwesomeIcon icon={faEye} style={{color:'white'}}/>
                                                        
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
     );
}

export default TimeKeeping;