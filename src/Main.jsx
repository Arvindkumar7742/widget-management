import React from 'react'
import { Widgets } from './components/Widgets';
import { useSelector } from 'react-redux';

export const Main = () => {
    const categories = useSelector((state)=>state.category.category)

    return (
        <div>
            <div>
                {
                    categories.map((category)=>(
                        <div key={category.id}>
                            <p>{category.name}</p>
                            <Widgets cat_id={category.id} widgets={category.widgets}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
