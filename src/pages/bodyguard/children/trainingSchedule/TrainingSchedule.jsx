import { DatePicker, Space, ConfigProvider, Calendar, theme } from 'antd';
import {FilterFilled} from '@ant-design/icons';
import dayjs from 'dayjs';
import "./trainingSchedule.css"
import { useEffect, useState } from 'react';



function TrainingSchedule() {
    const [value, setValue] = useState([
         "Today",
    ])
    const [dataForTrainingSchedule, setDataForTrainingSchedule] = useState([]);
    var now = dayjs()
    const [day, setDay] = useState("null")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
   
    const { RangePicker } = DatePicker;
    const { token } = theme.useToken();
    useEffect(()=>{
        const dataForTrainingSchedule = [
            {
                "date": "08-16-2024",
                "name": "Join1"
            },
            {
                "date": "08-18-2024",
                "name": "Join2"
            }
        ]
        setDataForTrainingSchedule(dataForTrainingSchedule)
        setValue(dataForTrainingSchedule)
      console.log("useFect",value)
    },[])
 
    const wrapperStyle = {
    minWidth:400,
    width:"100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const selectedDays = [
        dayjs('2024-08-16'), //16/08/2024
        dayjs('2024-08-18'), 
        dayjs('2024-08-20')
    ];

    
  const dateCellRender = (value) => {

    const isSelectedDay = selectedDays.some(day => value.isSame(day, 'day'));
    if (isSelectedDay) {
      return (
        <div style={{
            position: "absolute",
            top: 1,
            width: "100%",
            height:"100%",
            zIndex:'-1000',
            backgroundColor: '#ffac41', // Màu nền bạn muốn
            color: '#000', // Màu chữ
            borderRadius: '4px', // Bo góc (tùy chọn)
            textAlign: 'center' // Căn giữa nội dung
        }}>
        </div>
      );
    }

    return null;
  };
  const onSelect = (value) => {
    console.log("onselect",value)
    setDay(value.date())
    setMonth(value.month() + 1)
    setYear(value.year())
  }

   const onChangeDate = (date) => {
        const fetchData = dataForTrainingSchedule
        if(fetchData){
            // fetchData.filter((item, index) => {data.isSame(item[index][date],'day') ? setValue(item.name) : setValue("Don't have data working1")})
            // const item = fetchData.find((item)=> date.isSame(item.date,'day'))
            //   item ? setValue([item]) : null
            //   console.log("item", item)
            const filteredData = dataForTrainingSchedule.filter((item) => dayjs(item.date).isSame(date, 'day'));
            setValue(filteredData)
        }
    console.log('ngày hiện tại', date.format('YYYY-MM-DD') )
    console.log('name', value )
    console.log('name2', dataForTrainingSchedule )
   }

    return ( 
        // container
        <div className="w-screen h-auto lg:flex lg:justify-center">
            {/* main */}
           <div className="w-full lg:w-[1000px] px-2 space-y-5">
                <h1 className="text-[28px] lg:text-[32px]  font-medium text-[#ff1e56] text-center my-3 lg:my-6">Training Schedule</h1>
                {/* input to date from date */}
              
                <div className='flex flex-wrap justify-center w-full '>
                        <Space direction="vertical" size={10} >
                            <RangePicker popupStyle={{maxWidth:350, width:'100%', fontSize:22}}  placement='bottomRight' className='min-h-[50px] h-fit' />
                        </Space>
                    <button className='block w-[45px] hover:bg-slate-300  hover:text-white active::bg-slate-300  active::text-white rounded-[50%] float-end text-center  text-[26px]  ml-2 p-1' >
                   {<FilterFilled style={{fontSize:25, marginLeft:4}}/>}
                    </button>
                </div>
                <ConfigProvider
                    theme={{
                        token:{
                            fontSize:14,
                            controlInteractiveSize:18,
                            controlItemBgHover: "#ff1e56",
                            colorPrimary: "#ff1e56",
                        },
                        components:{
                            Calendar: {
                                itemActiveBg: "#ff1e56",
                              },
                        }

                    }}
                >
                <div className='w-full lg:w-[700px] p-4' style={wrapperStyle}>
                    <Calendar  fullscreen={false}  onPanelChange={onPanelChange} dateCellRender={dateCellRender} onSelect={onSelect} onChange={onChangeDate}  />
                </div>
                </ConfigProvider>
                <div className='px-5 pb-5 h-[40%] max-h-[400px] w-full bg-white border border-white overflow-hidden rounded-lg'>
                    <div className='border border-b-stone-500 mx-[-13px]'>
                        <h1 className='text-[20px] font-semibold py-3 mx-3 '>
                            {day === 'null' ? "Today" : <> {month} / {day} / {year} </>}
                        </h1>
                    </div>

                    <div className='flex flex-col text-[16px]  text-stone-600 mt-5 '>
                        <div className='flex flex-wrap justify-between mb-3 border-b border-b-red-600 '>
                            {/* use to map dom of dataFetch  */}
                            {
                                value.map((item , index) => {
                                    const isToDay = dayjs(item.date).isSame(now, "day")
                                    const isSelectedDate = dayjs(item.date).isSame(dayjs(`${year}-${month}-${day}`), 'day');
                                     if(isToDay || isSelectedDate ){
                                        return( 
                                             <span key={`index${index}`} className='flex mx-3 mb-2'>
                                             <p className='mr-2'>Contact:</p>
                                             <p className='font-medium text-stone-600'>{item.name}</p>
                                              </span> 
                                    )
                                    }
                                    return null
                                })
                            }
                           
                            <span className='flex  mb-2' >
                                <p className='mr-2'>Phone:</p>
                                <p> 01243214</p>
                            </span>
                            <span className='flex  mb-2' >
                                <p className='mr-2'>Form:</p>
                                <p> 8:30 am</p>
                        </span> 
                        <span className='flex  mb-2' >
                            <p className='mr-2'>To:</p>
                            <p> 16:30 pm</p>
                        </span>
                        </div>
                        {/*  */}
                        <div className='flex flex-wrap justify-between mb-3 border-b border-b-red-600 '>
                            <span className='flex mx-3 mb-2'>
                                <p className='mr-2'>Contact:</p>
                                <p> </p>
                            </span>
                            <span className='flex  mb-2' >
                                <p className='mr-2'>Phone:</p>
                                <p> 01243214</p>
                            </span>
                            <span className='flex  mb-2' >
                                <p className='mr-2'>Form:</p>
                                <p> 8:30 am</p>
                        </span> 
                        <span className='flex  mb-2' >
                            <p className='mr-2'>To:</p>
                            <p> 16:30 pm</p>
                        </span>
                        </div>
                    </div>
                </div>

        
               
           </div>
        </div>
     );
}

export default TrainingSchedule;