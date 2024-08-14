import {Form, Input, Button,} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
        },
    }

    // handler string cannot number
    const validateNoLetters = (_, value) => {
        const hasLetters = /[a-zA-Z]/.test(value);
        if (hasLetters) {
          return Promise.reject(new Error('Phone cannot contain text!'));
        }
        return Promise.resolve();
      };
    const onFinish = (values) => {
        console.log(values);
    };

function Contact() {
    return ( 
          <div className="mt-[110px] mx-24">
                <div className="flex space-x-3 text-3xl mx-24 my-7">
                        <p>Home</p>
                        <p>/</p>
                        <p className="text-[#ffac41]">Contact</p>
                 </div >
                <div className="w-full h-fit grid grid-cols-10">
                    {/* col1 */}
                
                    <div className="col-span-6 space-y-16 px-14 py-8">
                            <div className='space-y-5'>
                                <h1 className='text-[28px] text-center px-3 py-2'>BODYGUARD COMPANY</h1>
                                <p className='text-[19px] text-stone-500 font-serif'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam?</p>
                            </div>
                            <div className='p-9 border border-stone-200 shadow-md rounded-lg transform transition hover:-translate-y-2 hover:shadow-xl"'>
                                <Form
                                    {...layout}
                                    style={{
                                        maxWidth: 600,
                                      }}
                                    validateMessages={validateMessages}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name= 'fisrtname'
                                        label="FirstName"
                                
                                    >
                                        <Input placeholder='First Name'/>
                                    </Form.Item>

                                    <Form.Item
                                        label="LastName"
                                        name='lastname'
                                    >
                                        <Input placeholder='LastName'/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Phone"
                                        name='phone'
                                        rules={[{
                                            validator:validateNoLetters
                                        }]}
                                        
                                    >
                                        <Input placeholder='Phone number'/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                              required: true,
                                              type: 'email'
                                            },
                                          ]}
                                    >
                                        <Input placeholder='Exp@gmail.com'/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Message"
                                        name='message'
                                        rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                    >
                                        <TextArea />
                                    </Form.Item>
                                    <div className='flex flex-row-reverse'>
                                    <Form.Item
                                          wrapperCol={{
                                            span: 24
                                          }}
                                    >
                                        <Button  htmlType="submit" className='bg-black text-blue-50'>Submit</Button>
                                    </Form.Item>
                                    </div>
                                  
                                </Form>
                            </div>

                    </div>
                    {/* col2 */}
                    <div className="col-span-4  px-14 space-y-6 py-[37px]">
                        <div className='bg-[#ffac41] m-auto flex flex-col items-center  w-full max-w-[400px] h-1/5 p-[16px] rounded-2xl transform transition hover:-translate-y-2 hover:shadow-xl" '>
                            <div>
                                <h2 className='text-[26px] font-mono'>Call us</h2>
                                <p className='text-[16px]'>0000999937</p>
                            </div>
                        </div>
                            <div className='bg-[#ffac41] m-auto flex flex-col items-center  w-full max-w-[400px] h-2/5 p-[16px] rounded-2xl transform transition hover:-translate-y-2 hover:shadow-xl"'>
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
     );
}

export default Contact;