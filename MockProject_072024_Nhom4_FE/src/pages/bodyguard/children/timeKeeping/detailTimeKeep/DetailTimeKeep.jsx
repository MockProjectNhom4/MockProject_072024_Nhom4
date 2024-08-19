
import { useLocation } from 'react-router-dom';
function DetailTimeKeeping() {
    const location = useLocation()
    const {date, sub} = location.state || {};
    console.log(sub)

    return ( 
        // Container
            <div className='w-screen h-auto pt-10 lg:flex lg:justify-center'>
                    <div className="flex flex-col items-center w-full lg:w-[1200px] lg:bg-stone-600 lg:rounded-xl lg:p-10 px-2 pb-4px-2 space-y-7">
                        <h1 className='text-[2.5rem] text-[#ff1e56] font-bold'>DETAIL TIMEKEEPING</h1>
                        <table className=' table-auto min-w-[200px] w-full mx-2 overflow-hidden text-left text-[1.5rem] border-collapse border border-spacing-2 border-slate-400 rounded-3xl min-h-[200px] bg-white'>
                            <thead className='h-[50px] bg-zinc-900 text-white'>
                                <tr className='border w-full border-slate-300'>
                                    <th className='p-5'>
                                        No
                                    </th>
                                    <th className='p-5'>
                                        Date
                                    </th>
                                    <th className='p-5'>
                                        Start
                                    </th>
                                    <th className='p-5'>
                                        Finish
                                    </th>
                                </tr>
                            </thead>
                            {sub && date ? 
                            <tbody>
                                {   
                                    sub.map( (item, index) => {
                                        return(
                                            <tr key={`key${index}`} className='border border-slate-300 text-stone-700'>
                                                 <td className='p-5'>
                                                    {index + 1}
                                                </td>
                                                <td className='p-5'>
                                                    {item.date ? item.date : ""}
                                                </td>
                                                <td className='p-5'>
                                                    {item.start ? item.start : ""}
                                                </td>
                                                <td className='p-5'>
                                                    {item.finish ? item.finish : ""}
                                                </td>
                                            </tr>
                                        )
                                    } ) 
                                   
                                } 
                            </tbody> :  
                                     <>
                                     <div className='min-w-[400px] min-h-[200px] text-center text-[2rem] font-semibold'>
                                         NO DATA
                                     </div>
                                    </> 
                                    }
                        </table>
                        <div className='p-2 border-2 border-stone-800 rounded-md'>
                           <p className='text-[1.5rem] font-bold lg:text-white text-[#ff1e56] ' > Date: {date}</p>
                        </div>
                    </div>
            </div>
     );
}

export default DetailTimeKeeping;