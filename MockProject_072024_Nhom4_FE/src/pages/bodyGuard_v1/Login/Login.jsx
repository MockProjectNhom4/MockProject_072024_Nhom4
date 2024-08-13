import { Form, Input, ConfigProvider,Checkbox, Button} from "antd";
import {RightCircleOutlined} from '@ant-design/icons';

function Login() {
const logoLogin = '/logo.png'
const layout = {
        labelCol: {
            span: 4
        },
        wrapperCol:{
            span: 16
        }
    }
const style = {
        maxWidth:800,
        width: '100%',
    }
const onFinish = (values) => {
        console.log('Success:', values);
      };
const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
return ( 
        <div className="w-screen h-screen ">
            {/* main */}
            <div className ="bg-black w-full h-full">
                <div className="flex flex-col items-center w-full h-full p-5 space-y-3 lg:space-y-7">
                    <img src={logoLogin} className="size-36 mt-[30px]" alt="" />
                    <h1 className="text-[30px] text-[#ff1e56] font-semibold">Login</h1>
                    <div className="w-full h-[500px] lg:flex lg:justify-center">
                        <ConfigProvider
                            theme={{
                                token:{
                                    controlHeight: 50,
                                    fontSize: 18,
                                },
                                components:{
                                    Form:{
                                        labelColor: '#ffffff',
                                        verticalLabelPadding: 4,
                                        labelHeight: 20,
                                        labelFontSize: 18,
                                    },
                                    Button: {
                                        defaultColor: "#fff",
                                        defaultBg: '#ccc',
                                        defaultActiveBorderColor: "#ff1e56",
                                        defaultActiveBg:"#ccc",
                                        defaultActiveColor: "#ff1e56",
                                        defaultHoverBg:"#ff1e56",
                                        defaultHoverColor:"#0a0808",
                                        defaultHoverBorderColor: "#ff1e56"
                                    }
                                },
                            }}
                        >
                        <Form
                            {...layout}
                            style={style}
                           
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            initialValues={true} // checkbox value true
                        >
                            <Form.Item
                                name="username"
                                label="Username"
                                rules={[
                                    {
                                      required: true,
                                      message: 'Please input your username!',
                                    },
                                  ]}
                            >
                                <Input placeholder="Enter your username"/>
                            </Form.Item>
                            
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                      required: true,
                                      message: 'Please input your password!',
                                    },
                                  ]}
                            >
                                <Input.Password placeholder="Inter password"/>
                            </Form.Item >
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                className="lg:pl-[135px]"
                            >
                                 <Checkbox className="text-[#ffac41]">Remember me</Checkbox>
                            </Form.Item>
                            <div className="flex h-fit justify-center">
                            <Form.Item
                                className="text-center mt-[10px] w-full"
                                wrapperCol={{
                                    span: 24
                                }}
                            >
                                 <Button htmlType="submit" className="size-20 bg-transparent " icon={<RightCircleOutlined  style={{ fontSize: '40px'}}/>}>
                                 </Button>
                            </Form.Item>  
                            </div>
                             
                                 
                        </Form>
                        </ConfigProvider>
                     
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;