import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux'
import { addWidget } from '../slices/CategorySlice';

export const AddWidgetModal = ({ setAddWidgetModal, cat_id }) => {
    const dispatch = useDispatch();
    const [widgetData, setWidgetData] = useState({
        wid_name: "",
        wid_text: "",
    })

    function changeHandler(e) {
        setWidgetData({
            ...widgetData,
            [e.target.name]: [e.target.value]
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        dispatch(addWidget({
            id: cat_id, widget: {
                id: Date.now(),
                wid_name: widgetData.wid_name,
                wid_text: widgetData.wid_text,
            }
        }))
        setAddWidgetModal(false);
        setWidgetData({
            wid_name: "",
            wid_text: ""
        })
    }
    return (
        <div className='fixed inset-0 grid place-items-center backdrop-dark '>
            <div className='flex flex-col gap-1 border-[1px] bg-white rounded-md w-[450px]'>
                <div className='mt-5 ml-5 mr-5 flex flex-row justify-between'>
                    <p className='text-xl font-bold'>Widget</p>
                    <div className='text-xl'>
                        <button
                            onClick={() => {
                                setAddWidgetModal(false);
                            }}><RxCross2 /></button>
                    </div>
                </div>
                <form onSubmit={submitHandler}
                    className='flex flex-col gap-5 bg-white rounded-md p-5'
                >
                    <div className='flex flex-col'>
                        <label htmlFor="wid_name">Widget Name : </label>
                        <input
                            placeholder={`Enter the Widget Name`}
                            className='outline-none border-2 border-slate-500'
                            value={widgetData.wid_name}
                            onChange={changeHandler}
                            maxLength={30}
                            type="text" id='wid_name' name='wid_name'
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="wid_text">Widget Text : </label>
                        <input
                            placeholder={`Enter the Widget Text`}
                            className='outline-none border-2 border-slate-500'
                            onChange={changeHandler}
                            type="text" id='wid_text' name='wid_text' 
                            maxLength={200}
                            required/>
                    </div>
                    <button
                        className='bg-blue-500 rounded-md mt-5 p-1 w-[150px] text-white'
                        type='submit'
                    >Add</button>
                </form>
            </div>
        </div>
    )
}
