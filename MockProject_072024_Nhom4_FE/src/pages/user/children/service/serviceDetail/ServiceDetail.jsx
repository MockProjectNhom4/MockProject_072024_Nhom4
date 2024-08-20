import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
const bodyGuard5 = "../public/background/bg5.png"
function ServiceDetail() {
    const location = useLocation();
    const service = location.state?.service;
    console.log("service",service)
    useEffect(() => {
        window.scrollTo(0, 100);
    }, []);
    return (
        <div>
        {
            service.name ? (
            <>
            <img className="object-cover w-full h-[600px]" src={bodyGuard5} alt="bodyGuard5" />
            <div className="flex space-x-3 text-3xl mx-24 my-7">
                <p >Home</p>
                <p>/</p>
                <NavLink to='/service'>
                <p className="hover:text-[#ffac41]">Services</p> 
                </NavLink>
                <p>/</p>
                <p className="text-[#ffac41]">{service.name}</p>
            </div >
            <div className="mt-[50px] mx-24">
            <div className="w-full h-fit grid grid-cols-10">
                {/* col1 */}
                <div className="col-span-6 space-y-16 px-14 py-8">
                        <div className='space-y-5'>
                            <h1 className='text-[28px] pr-3 py-2'>{service.name}</h1>
                            <p className='text-[19px] text-stone-500 font-serif'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?</p>
                            <p className='text-[19px] text-stone-500 font-serif'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?</p>
                            <p className='text-[19px] text-stone-500 font-serif'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?</p>
                        </div>
                </div>
                {/* col2 */}
                <div className=" col-span-4  px-14  py-[37px]">
                    <div className="sticky top-56 space-y-6">
                    <div className='bg-[#ffac41]  text-white m-auto flex flex-col items-center  w-full max-w-[400px] h-[140px] p-[16px] rounded-2xl transform transition hover:-translate-y-2 hover:shadow-xl" '>
                        <div>
                            <h2 className='text-[26px] font-mono'>Call us</h2>
                            <p className='text-[16px]'>0000999937</p>
                        </div>
                    </div>
                        <div className='bg-[#ffac41]  text-white m-auto flex flex-col items-center  w-full max-w-[400px] h-[280px] p-[16px] rounded-2xl transform transition hover:-translate-y-2 hover:shadow-xl"'>
                           <div className='text-center'>
                            <h2 className='text-[26px] font-mono'>Find us</h2>
                            <p className='text-[16px]'> 1234 Elm Street
                             Apt 56B
                            Springfield, IL 62704
                            USA</p>
                           </div>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
        </>): 
        (<>
        </>)
        }
    </div>
     );
}

export default ServiceDetail;