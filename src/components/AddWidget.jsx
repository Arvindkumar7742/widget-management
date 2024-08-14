import React from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../slices/CategorySlice';
import { FaPlus } from "react-icons/fa6";

export const AddWidget = ({cat_id}) => {
    const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-center w-[350px] h-[200px] bg-white border-2 border-slate-300 rounded-lg p-2'>
        <button
        className='flex items-center gap-2 border-2 border-slate-500 p-2 rounded-lg'
        onClick={()=>{
            dispatch(addWidget({id:cat_id,widget:{
                id:Date.now(),
                wid_name:"new widget",
                wid_text:"new widget text",
            }}))
        }}
        ><FaPlus /> <p>Add Widget</p></button>
    </div>
  )
}
