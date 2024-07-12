import React, { useEffect, useState } from 'react'
import Layout from './Component/Layout'
import Task from './Component/Task';

const Home = () => {
    const [data,setData]=useState("")
    const [task,setTask]=useState([]);
    useEffect(()=>{
        const data1=localStorage.getItem('task');
        if(data1){
            const parseData=JSON.parse(data1);
            setTask([
                ...parseData
            ])
        }
    },[])

    const addtask=()=>{
        if(data!==""){
        setTask([...task,data]);
        localStorage.setItem("task", JSON.stringify(task));
        setData("");
        }       
    }
    const changedata=(id,value)=>{
       
        const newArray = [...task];
        
        newArray[id] = value;
        
        setTask(newArray);
        localStorage.setItem("task", JSON.stringify(task));
    }
    function remove(id){
        let newListTodo = [...task];
        newListTodo.splice(id,1)
        setTask([...newListTodo])
        localStorage.setItem("task", JSON.stringify(task));
      }
  return (
    <Layout>
        
        <div className='min-h-screen flex justify-around items-center r'>
            <div className='bg-slate-400 min-h-20 p-4 rounded-lg'>
                <div>
                    <input type="text" value={data} onChange={(e)=>setData(e.target.value)} className='w-64 h-8 rounded-md pl-2' placeholder='Add Your Task...' />
                    <button onClick={()=>addtask()} className=' bg-blue-300 w-20 h-8 rounded-md ml-2'>ADD</button>
                </div>
                
                {
                    task?.map((e,i)=>{
                        
                        
                        return(
                                <Task title={e} id={i} remove={remove} changedata={changedata}/>
                           )
                        
})
                }
                
            </div>
        </div>
       
    </Layout>
  )
}

export default Home