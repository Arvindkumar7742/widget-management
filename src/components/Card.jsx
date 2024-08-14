import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../slices/CategorySlice';
import { MdOutlineCancel } from "react-icons/md";

export const Card = ({ cat_id, widget }) => {
  const dispatch = useDispatch();
  return (
    <div className='w-[350px] h-[200px] bg-white border-2 border-slate-300 rounded-lg p-2 group'>
      <div className='flex flex-row justify-between'>
        <p className='text-lg font-serif'>{widget.wid_name}</p>
        <button
        className='opacity-0 group-hover:opacity-100 text-xl
        transition-all duration-200'
        onClick={() => {
        dispatch(removeWidget({ id: cat_id, widget_id: widget.id }))
      }}><MdOutlineCancel /></button>
      </div>
      <p className='flex items-center justify-center pt-2 text-sm font-mono '>{widget.wid_text}</p>
    </div>
  )
}
