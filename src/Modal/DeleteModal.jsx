import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../slices/CategorySlice';

export const DeleteModal = ({ wid_name, cat_id, wid_id, setDeleteModal }) => {
    const dispatch = useDispatch();
    return (
        <div className='fixed inset-0 backdrop-dark  grid place-items-center'>
            <div className='flex flex-col gap-2 bg-white p-5 rounded-lg border-2 border-slate-400 '>
                <p className='text-lg'>Are You Sure want to delete the Widget name : <span className='font-bold'>{wid_name}</span></p>
                <div className='flex flex-row gap-4'>
                    <button
                        onClick={() => {
                            setDeleteModal(false);
                        }}
                    className='border-2 border-slate-300 rounded-lg p-2 hover:bg-black hover:text-white transition-all duration-400'
                    >Cancel</button>
                    <button
                    className='bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-600
                     transition-all duration-400'
                        onClick={() => {
                            dispatch(removeWidget({ id: cat_id, widget_id: wid_id }))
                        }}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}
