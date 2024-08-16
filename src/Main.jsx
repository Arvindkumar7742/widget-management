import React, { useEffect, useState } from 'react'
import { Widgets } from './components/Widgets';
import { useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { EditWidgetModal } from './Modal/EditWidgetModal';

export const Main = () => {
    let categories = useSelector((state) => state.category.category);
    const [newCategories, setNewCategories] = useState(categories);
    const [editWidgetModal, setEditWidgetModal] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const filterCategory = () => {
            const filteredCategories = categories.map(cat => {
                const filteredWidgets = cat.widgets.filter(widget =>
                    typeof widget.wid_name === 'string' && widget.wid_name.toLowerCase().includes(searchText.toLowerCase())
                );
    
                return {
                    ...cat,
                    widgets: filteredWidgets
                };
            });
            setNewCategories(filteredCategories);
        }
    
        filterCategory();
    }, [searchText,categories]);

    return (
        <div className='flex flex-col p-4'>
            <div className='flex flex-row justify-between'>
                <p className='text-2xl font-bold'>Dashboard</p>
                <div className='flex flex-row gap-6 relative'>
                    <input
                        className='p-1 lg:w-[500px] md:w-[300px] sm:w-[100px] rounded-md outline-none'
                        type="text" placeholder="Search anything by widget name..."
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className='flex items-center gap-2 border-2 border-slate-500 p-2 rounded-lg
                        hover:bg-black hover:text-white transition-all duration-300'
                        onClick={() => {
                            setEditWidgetModal(true);
                        }}
                    ><FaPlus /> Edit widget</button>
                </div>
            </div>
            <div className='flex flex-col p-2 gap-4'>
                {
                    newCategories.map((category) => (
                        <div key={category.id}>
                            <p className='text-xl font-semibold'>{category.name}</p>
                            <Widgets cat_id={category.id} widgets={category.widgets} />
                        </div>
                    ))
                }
            </div>
            {
                editWidgetModal && <EditWidgetModal setEditWidgetModal={setEditWidgetModal} />
            }
        </div>
    )
}
