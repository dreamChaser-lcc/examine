import React, { useEffect, useReducer } from 'react';

export default ()=>{
    const reducer=(state:any,action:any)=>{
        console.log("state",state)
        console.log("action",action)
        switch(action.type)  {
            case('countUp'):
              return  {
                ...state,
                count: state.count + 1
              }
            default:
              return  state;
          }
    }
    const [state, dispatch] = useReducer(reducer,{count:0} )
    useEffect(() => {

        dispatch({type:"countUp"})
    }, [])
    console.log(state)
    return (
        <>
            <div></div>
          {/* {state} */}
        </>
    )
}