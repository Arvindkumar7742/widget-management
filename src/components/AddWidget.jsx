import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { AddWidgetModal } from '../Modal/AddWidgetModal';

export const AddWidget = ({cat_id}) => {
    
    const [addWidgetModal , setAddWidgetModal] = useState(false);

  return (
    <div className='flex items-center justify-center w-[350px] h-[200px] bg-white border-2 border-slate-300 rounded-lg p-2'>
        <button
        className='flex items-center gap-2 border-2 border-slate-500 p-2 rounded-lg'
        onClick={()=>{
            setAddWidgetModal(true);
        }}
        ><FaPlus /> <p>Add Widget</p></button>
        {
          addWidgetModal && <AddWidgetModal cat_id={cat_id} setAddWidgetModal={setAddWidgetModal}/>
        }
    </div>
  )
}
