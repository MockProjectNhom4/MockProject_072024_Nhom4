// import axios, { AxiosRequestConfig } from 'axios';

// const servers = {
//     php: "dec4-14-176-232-65",
//     node: "b9e6-116-110-80-136",
//     java: "0b35-171-243-49-233",
// };

// const createAxiosInstance = (serverType: 'php' | 'node' | 'java', apiEndpoint: string) => {
//     return axios.create({
//         baseURL: `https://${servers[serverType]}.ngrok-free.app/api/${apiEndpoint}`,
//         withCredentials: false,
//         timeout: 30000,
//         headers: {
//             'ngrok-skip-browser-warning': 'true',
//             'Content-type': 'application/json;charset=utf-8',
//         },
//     });
// };

// interface RequestOptions {
//     method: AxiosRequestConfig['method'];
//     data?: any;
//     serverType?: 'php' | 'node' | 'java';
//     apiEndpoint?: string;
//     onSuccess?: (data: any) => void;
//     onError?: (error: any) => void;
// }

// const request = async ({
//     method,
//     data,
//     onSuccess = () => { },
//     onError = () => { },
//     serverType = 'php',
//     apiEndpoint = '',
// }: RequestOptions) => {
//     try {
//         const AXIOS = createAxiosInstance(serverType, apiEndpoint);
//         const response = await AXIOS({
//             method,
//             data,
//         });
//         // Xử lý hiển thị popup thành công
//         // Code here
//         onSuccess(response.data);
//         return response;
//     } catch (error) {
//         // Xử lý hiển thị popup lỗi
//         // Code here
//         if (axios.isAxiosError(error)) {
//             // Nếu là lỗi từ Axios, sử dụng error.response.data
//             onError(error.response?.data);
//         } else {
//             // Nếu không phải lỗi từ Axios, xử lý một cách phù hợp
//             onError(error);
//         }
//     }
// };

// export default request;