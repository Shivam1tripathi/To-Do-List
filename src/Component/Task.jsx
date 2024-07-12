import React, { useState } from 'react'

const Task = (props) => {
    const [display,setDisplay]=useState(false)
    const [edittask,setEdittask]=useState(props.title)
    const [complete,setComplete]=useState(false);
    const displayset=()=>{
      if(display===false){
        setDisplay(true);
      }else{
        setDisplay(false);
      }
    }
    const completeset=()=>{
      if(complete===false){
        setComplete(true);
      }else{
        setComplete(false);
      }
    }
  return (
    <div className='flex justify-between w-full  p-2 mt-2'>
          {
            display===false?(
                <>
                <h1 onClick={()=>{completeset()}} style={complete===true?{textDecorationLine: "line-through"}:{}} className='font-extrabold decoration-[#000000] text-purple-800 '>{props.title.substring(0,30).toUpperCase()}</h1>
        <div>
        <i onClick={()=>{displayset()}} className="fa-solid fa-pencil fa-lg mr-2"></i>
        <i onClick={()=>props.remove(props.id)}  className="fa-solid cursor-pointer fa-trash fa-lg mr-2" style={{color: "#fb3628",}}></i>
        </div>  
                </>
            ):(
              <>
              <input value={edittask} onChange={(e)=>{setEdittask(e.target.value)}} className='w-64 h-8 rounded-md pl-2 mr-2' type="text" />
                <div className=' flex items-center justify-center'>
                  <button onClick={()=>{
                    props.changedata(props.id,edittask)
                    displayset()
                    }} className=' text-xl w-10 mr-2'>✔️</button>
                  <button onClick={()=>{
                    displayset()
                    setEdittask(props.title)
                  }} className='font-extrabold text-red-700 text-xl'>X</button>
                </div>
              </>
            )
          }                          
        
        </div>                         
    
  )
}

export default Task