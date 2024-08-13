import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../slices/CategorySlice';

export const Card = ({cat_id,widget}) => {
  const dispatch = useDispatch();
  return (
    <div>
        <p>{widget.wid_name}</p>
        <p>{widget.wid_twxt}</p>
        <button onClick={()=>{
          dispatch(removeWidget({id:cat_id,widget_id:widget.id}))
        }}>delete</button>
    </div>
  )
}
