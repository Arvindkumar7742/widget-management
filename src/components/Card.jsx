import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { DeleteModal } from '../Modal/DeleteModal';

export const Card = ({ cat_id, widget }) => {

  const [deleteModal,setDeleteModal] = useState(false);
  
  return (
<div className='w-[350px] h-[200px] bg-white border-2 border-slate-300 rounded-lg p-2 '>
    <div className='flex flex-row justify-between'>
        <p className='text-lg font-bold'>{widget.wid_name}</p>
        <button
            className='text-xl transition-all duration-200'
            onClick={() => {
                setDeleteModal(true);
            }}><MdOutlineCancel /></button>
    </div>
    <p className='flex items-center justify-center pt-2 text-sm font-sans'
       style={{ wordBreak: 'break-word', whiteSpace: 'normal', overflow: 'auto', maxHeight: '130px' }}>
        {widget.wid_text}
    </p>
    {
        deleteModal && <DeleteModal wid_name={widget.wid_name} setDeleteModal={setDeleteModal} cat_id={cat_id} wid_id={widget.id} />
    }
</div>
  )
}
