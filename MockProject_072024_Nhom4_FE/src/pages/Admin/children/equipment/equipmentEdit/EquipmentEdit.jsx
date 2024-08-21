import {Form, Input, Button, InputNumber, Select} from 'antd';

export default function EquipmentEdit() {
    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      };
    //   const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //       email: '${label} is not a valid email!',
    //         },
    //     }
        const onFinish = (values) => {
            console.log(values);
        };
    return(
        <div className="flex flex-col items-center w-full h-fit p-5 space-y-5">
            <h1 className='font-medium'>Edit Equipment</h1>
            <div className='p-9 w-full border border-stone-200 shadow-md rounded-lg"'>
                                <Form
                                    {...layout}
                                    width={'100%'}
                                    // validateMessages={validateMessages}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name= 'name'
                                        label="Name"
                                
                                    >
                                        <Input placeholder='Name'/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Unit"
                                        name='unit'
                                    >
                                        <Input placeholder='Unit'/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Quantity"
                                        name='quantity'
                                        // rules={[{
                                        //     validator:validateNoLetters
                                        // }]}
                                        
                                    >
                                        <InputNumber placeholder='0'/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Status"
                                        name='status'
                                    >
                                        <Select initialValues={'In Stock'}>
                                            <Select.Option value="In Stock">In Stock</Select.Option>
                                            <Select.Option value="Out Of Stock">Out Of Stock</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <div className='flex flex-row-reverse'>
                                    <Form.Item
                                          wrapperCol={{
                                            span: 24
                                          }}
                                    >
                                        <Button  htmlType="submit" className='bg-black text-blue-50'>Edit</Button>
                                    </Form.Item>
                                    </div>
                                  
                                </Form>
                            </div>
        </div>
    )
}