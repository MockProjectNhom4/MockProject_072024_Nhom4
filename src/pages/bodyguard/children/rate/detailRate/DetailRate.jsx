import { Rate } from 'antd';
export default function RateOfCustomer({data=[]}) {
    console.log("data", data[0].name)
    return(
        <div className=" h-fit">
            <div>
                <h1 className="text-[2rem] text-center mb-11">{data[0].name}</h1>
                {/* content */}
                <div className='space-y-4'>
                    {/* Score */}
                    <div className='flex justify-between items-center'>
                        <button className='bg-[#ffac41] w-[100px] p-1 rounded-3xl'>Score</button>
                        <span className='text-right text-[1.5rem] font-medium'>4.5 / 5.0</span>
                    </div>
                    <div className='space-y-4'>
                        {/* card 1 */}
                        <div className="bg-opacity-75 shadow-xl  p-3 rounded-2xl space-y-3">
                            <div className='flex justify-between items-center'>
                                <p className='font-serif text-[1.8rem]'>Customer Name</p>
                                <Rate className='flex-1 text-right' disabled  defaultValue={3}/>
                            </div>
                            <p className='text-slate-500'>
                            In today’s world, security guard services have become an indispensable part of modern life, particularly for high-profile individuals, business executives, and those who require special protection.
                            </p>
                        </div >
                            {/* card 1 */}
                            <div className="bg-opacity-75 shadow-xl  p-3 rounded-2xl space-y-3">
                            <div className='flex justify-between items-center'>
                                <p className='font-serif text-[1.8rem]'>Customer Name</p>
                                <Rate className='flex-1 text-right' disabled  defaultValue={3}/>
                            </div>
                            <p className='text-slate-500'>
                            In today’s world, security guard services have become an indispensable part of modern life, particularly for high-profile individuals, business executives, and those who require special protection.
                            </p>
                        </div>
                            {/* card 1 */}
                            <div className="bg-opacity-75 shadow-xl  p-3 rounded-2xl space-y-3">
                            <div className='flex justify-between items-center'>
                                <p className='font-serif text-[1.8rem]'>Customer Name</p>
                                <Rate className='flex-1 text-right' disabled  defaultValue={3}/>
                            </div>
                            <p className='text-slate-500'>
                            In today’s world, security guard services have become an indispensable part of modern life, particularly for high-profile individuals, business executives, and those who require special protection.
                            </p>
                        </div>
                        {/* card 1 */}
                        <div className="bg-opacity-75 shadow-xl  p-3 rounded-2xl space-y-3">
                            <div className='flex justify-between items-center'>
                                <p className='font-serif text-[1.8rem]'>Customer Name</p>
                                <Rate className='flex-1 text-right' disabled  defaultValue={3}/>
                            </div>
                            <p className='text-slate-500'>
                            In today’s world, security guard services have become an indispensable part of modern life, particularly for high-profile individuals, business executives, and those who require special protection.
                            </p>
                        </div>
                        {/* card 1 */}
                        <div className="bg-opacity-75 shadow-xl  p-3 rounded-2xl space-y-3">
                            <div className='flex justify-between items-center'>
                                <p className='font-serif text-[1.8rem]'>Customer Name</p>
                                <Rate className='flex-1 text-right' disabled  defaultValue={3}/>
                            </div>
                            <p className='text-slate-500'>
                            In today’s world, security guard services have become an indispensable part of modern life, particularly for high-profile individuals, business executives, and those who require special protection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}