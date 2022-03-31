import React, { useEffect, FC, useState, useRef, useCallback } from 'react';
// import alias, {commonExport,commonExport2} from "../../../components/module/module";
import alias, { commonExport, commonExport2 } from '../../../components/module';
import F1 from '../../../components/package';
import DevelopForm from '../assembly/developFrom';
import path from 'path';
import axios from 'axios';
import { GET } from '@/axios';
import DeepTable from '@/component/base/deepTable';
import Detail from '@/component/base/detail';
// const api = async ()=>{
//   const {data:res} =  await axios.get("/app/tenantUser/allapi");
//   console.log(res)
//   return res
// }
export default (props:any) => {
  console.log("testModel",props)
  // useEffect(()=>{
  //     GET("/app/tenantUser/system/All");
  // },[])
  const [mouseTaget, setMouseTaget] = useState<any>('123');
  const [event, setEvent] = useState<any>();
  const node = document.querySelector('#box');
  function debounce(fn: any, delay: any) {
    let timer: any;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(fn);
        fn();
      }, delay);
    };
  }
  function useDebouncce(fn: () => void, delay: number) {
    let { current } = useRef<{ fn: () => void; timer: any }>({
      fn,
      timer: null,
    });
    useEffect(() => {
      current.fn = fn;
    }, [fn]);
    return useCallback(() => {
      if (!current.timer)
        current.timer = setTimeout(() => {
          current.fn();
        }, delay);
      else clearTimeout(current.timer);
    }, []);
  }
  useEffect(() => {
    //  useDebouncce(()=>{setMouseTaget(Math.random())},1000);
  }, [event]);

  const handleMouseMove = (e: any) => {
    setEvent(e);
  };
  return (
    <>
      {/* <div id="box" style={{width:'200px',height:'200px',backgroundColor:'red'}} onMouseMove={handleMouseMove}>
          {mouseTaget}
        </div> */}
      {/* <DeepTable columns={[]} /> */}
      <Detail/>
    </>
  );
};
