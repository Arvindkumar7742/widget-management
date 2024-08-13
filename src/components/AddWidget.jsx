import React from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../slices/CategorySlice';

export const AddWidget = ({cat_id}) => {
    const dispatch = useDispatch();

  return (
    <div>
        <button
        onClick={()=>{
            dispatch(addWidget({id:cat_id,widget:{
                id:Date.now(),
                wid_name:"new widget",
                wid_text:"new widget text",
            }}))
        }}
        >Add Widget</button>
    </div>
  )
}
