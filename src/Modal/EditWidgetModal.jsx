import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget } from '../slices/CategorySlice';

export const EditWidgetModal = ({ setEditWidgetModal }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.category);
    const [selected, setSelected] = useState(1);
    const [uncheckedWidgets, setUncheckedWidgets] = useState({});

    const changeHandler = (e, wid_id, cat_id) => {
        const { checked } = e.target;

        setUncheckedWidgets((prevUncheckedWidgets) => {
            const updatedCategoryWidgets = prevUncheckedWidgets[cat_id] || [];

            if (!checked) {
                return {
                    ...prevUncheckedWidgets,
                    [cat_id]: [...updatedCategoryWidgets, wid_id],
                };
            } else {
                return {
                    ...prevUncheckedWidgets,
                    [cat_id]: updatedCategoryWidgets.filter(id => id !== wid_id),
                };
            }
        });
    };

    const selectedCategoryUnchecked = uncheckedWidgets[selected] || [];

    function clickHandler() {
        for (let cat_id in uncheckedWidgets) {
            if (uncheckedWidgets.hasOwnProperty(cat_id)) {
                const widget_ids = uncheckedWidgets[cat_id];
                for (let wid_id of widget_ids) {
                    dispatch(removeWidget({ id: cat_id, widget_id: wid_id }))
                }
            }
        }
        setEditWidgetModal(false);
    }

    return (
        <div className='fixed inset-0 grid place-items-end backdrop-dark'>
            <div className='bg-white w-[700px] min-h-full flex flex-col'>
                <div className='flex flex-row justify-between p-3 bg-blue-800 text-white'>
                    <p>Add Widget</p>
                    <div className='text-xl'>
                        <button onClick={() => setEditWidgetModal(false)}>
                            <RxCross2 />
                        </button>
                    </div>
                </div>
                <p className='pl-3'>Personalise your dashboard by adding the following widget</p>
                <div className='pl-3 flex flex-row'>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <p
                                className={`${selected === category.id && "font-bold"} pl-[50px] pr-[50px] hover:cursor-pointer`}
                                onClick={() => setSelected(category.id)}
                            >
                                {category.name.slice(0, 4)}
                            </p>
                            <div
                                className={`${selected === category.id ? "bg-slate-800" : " bg-slate-400"} w-full h-[2px]`}
                            ></div>
                        </div>
                    ))}
                </div>
                {/* Widget list container */}
                <div className={`flex flex-col pl-3 gap-1 overflow-y-auto flex-grow h-0`}>
                    {categories[selected - 1].widgets.map((item) => (
                        <label
                            key={item.id}
                            htmlFor={item.name}
                            className='border-2 border-slate-400 m-2 p-2'
                        >
                            <input
                                type="checkbox"
                                name={item.wid_name}
                                id={item.wid_name}
                                checked={!selectedCategoryUnchecked.includes(item.id)}
                                onChange={(e) => changeHandler(e, item.id, selected)}
                            />
                            {"   " + item.wid_name}
                        </label>
                    ))}
                </div>
                <div className='flex flex-row gap-2 p-3'>
                    <button
                        onClick={() => setEditWidgetModal(false)}
                        className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200'>
                        Cancel
                    </button>
                    <button
                        className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
                        onClick={clickHandler}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};