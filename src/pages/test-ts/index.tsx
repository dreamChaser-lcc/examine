import React,{useEffect,FC} from 'react';
// import alias, {commonExport,commonExport2} from "../../../components/module/module";
import alias, {commonExport,commonExport2} from "../../../components/module";
import F1 from "../../../components/package";
import DevelopForm from '../assembly/developFrom' 
import path from 'path'
import axios from 'axios'
import { GET } from '@/axios';
// const api = async ()=>{
//   const {data:res} =  await axios.get("/app/tenantUser/allapi");
//   console.log(res)
//   return res
// }
export default ()=>{
    useEffect(()=>{
        GET("/app/tenantUser/system/All");
    },[])


    
    return (<>
        {/* <DevelopForm/> */}
        
    </>)
} 

