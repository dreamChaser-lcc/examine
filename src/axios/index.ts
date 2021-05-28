import axios from "axios";

export const GET = async (url:string,params?:any)=>{
    console.log(url,"GET请求参数-----",params)
    const {data:res} =  await axios.get(url);
    console.log(url,'响应结果',res);
    return res
}
export const POST = async (url:string,params?:any)=>{
    console.log(url,"POST请求参数-----",params);
    const res =  await axios.post(url,params);
    console.log(url,'响应结果',res.data);
    return res.data;
}