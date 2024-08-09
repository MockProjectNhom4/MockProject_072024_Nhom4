import { CiSearch } from "react-icons/ci";
function History() {
    return (
        <div className="mt-[150px]">
            {/* container */}
         <div className=" m-auto max-w-screen-xl w-full min-h-[655px] shadow-lg border border-stone-200 mb-[15px]  pt-[30px] ">
            {/* header */}
            <div className="flex flex-col items-center">
                
                <h1 className="my-[20px] text-[#ff1e56] text-[32px] font-medium">History</h1>
                <div className="focus-within:border-[#ff1e56] w-2/6 h-fit border-[1px] border-stone-400 bg-white rounded-[5px] mb-[50px] ">
                <div className="p-2 flex ">
                    <input type="text" className="w-full outline-none h-[30px] text-[16px]" />
                    <div className="h-[30px] w-[2px] ml-[4px] bg-black"></div>
                    <button className=" text-[24px] p-1 ml-1"><i className=""><CiSearch/></i></button>
                </div>
                </div>
                <table  cellPadding={8} className="w-full max-w-[90%] mb-[30px] border-collapse border-[1px] border-stone-600  ">
                    <thead>
                        <tr className="text-left text-[18px] border-[1px] border-slate-300 ">
                            <th>ID</th>
                            <th>Services</th>
                            <th >Guard Profile</th>
                            <th>Agenda</th>
                            <th>Status</th>   
                            <th>Rate</th>
                        </tr>
                    </thead>
                        <tr className="text-[16px] border-[1px] border-slate-300 ">
                            <td>
                                1
                            </td>
                            <td>
                                Personal Guard
                            </td>
                            <td>
                                Jhone
                            </td>
                            <td>
                                19/07/24
                            </td>
                            <td>
                                Finish
                            </td>
                            <td>
                                <p> John Doe is a dedicated, professional bodyguard with exceptional skills in </p>
                            </td>
                        </tr>
                        <tr className="text-[16px] border-[1px] border-slate-300">
                            <td>
                                1
                            </td>
                            <td>
                                Personal Guard
                            </td>
                            <td>
                                Jhone
                            </td>
                            <td>
                                19/07/24
                            </td>
                            <td>
                                Finish
                            </td>
                            <td>
                                <p> John Doe is a dedicated, professional bodyguard with exceptional skills in </p>
                            </td>
                        </tr>
                        <tr className="text-[16px] border-[1px] border-slate-300">
                            <td>
                                1
                            </td>
                            <td>
                                Personal Guard
                            </td>
                            <td>
                                Jhone
                            </td>
                            <td>
                                19/07/24
                            </td>
                            <td>
                                Finish
                            </td>
                            <td>
                                <p> John Doe is a dedicated, professional bodyguard with exceptional skills in </p>
                            </td>
                        </tr>
                    <tbody>

                    </tbody>
        
                </table>
            </div>
            {/* content */}
            <div>

            </div>
        </div>
     </div>    
     );
}

export default History;