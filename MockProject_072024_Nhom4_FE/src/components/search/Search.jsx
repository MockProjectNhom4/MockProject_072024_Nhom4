import { CiSearch } from "react-icons/ci";
function Search() {
    return ( 
        <>
            <div className="focus-within:border-[#ff1e56] w-2/6 h-fit border-[1px] border-stone-400 bg-white rounded-[5px] mb-[50px] ">
                <div className="p-2 flex ">
                    <input type="text" className="w-full outline-none h-[30px] text-[16px]" />
                    <div className="h-[30px] w-[2px] ml-[4px] bg-black"></div>
                    <button className=" text-[24px] p-1 ml-1"><i className=""><CiSearch/></i></button>
                </div>
                </div>
        </>
     );
}

export default Search;