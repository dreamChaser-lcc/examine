import axios from "axios";

export const GET = async (url:string)=>{
    const {data:res} =  await axios.get(url);
    // console.log(res)
    return res
}
export const POST = async (url:string,params?:any)=>{
    const {data:res} =  await axios.post(url,params);
    console.log(res)
    return res
}